import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography, Card } from "@mui/material";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import mockLeads from "../../mocks/leads.json";
import { ILead } from "../../store/leads/types";
import getLeadsForKanban from "../../helpers/getLeadsForKanban";
import { useAppDispatch } from "../../hooks/storeHooks";
import { setLeadStage } from "../../store/leads/leadsStore";

interface SortableCardProps {
  id: string;
  title?: string;
}

const SortableCard: FC<SortableCardProps> = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
    
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: 8,
  };

  return (
    <Card
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      sx={{
        p: 2,
        bgcolor: "#f5f5f5",
        cursor: "grab",
        ...style,
      }}
    >
      <Typography>{title}</Typography>
    </Card>
  );
};

const Kanban: FC = () => {
  const [columns, setColumns] = useState(getLeadsForKanban(mockLeads));
  const sensors = useSensors(useSensor(PointerSensor));
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getLeadsForKanban(mockLeads);
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setColumns((prevColumns) => {
      let sourceColumnId = "";
      let destinationColumnId = "";
      let draggedLead: ILead | null = null;

      // Знаходимо колонку, з якої перетягуємо
      for (const column of prevColumns) {
        if (column.leads.find((lead) => lead.id === active.id)) {
          sourceColumnId = column.id;
          draggedLead = column.leads.find((lead) => lead.id === active.id)!;
          break;
        }
      }

      // Знаходимо колонку, в яку перетягуємо
      for (const column of prevColumns) {
        if (column.leads.find((lead) => lead.id === over.id)) {
          destinationColumnId = column.id;
          break;
        }
      }

      // Якщо не знайдено або перетягнули в ту ж саму колонку — нічого не робимо
      if (!draggedLead || !destinationColumnId || !sourceColumnId)
        return prevColumns;
      if (sourceColumnId === destinationColumnId) {
        // Reorder в межах однієї колонки
        return prevColumns.map((col) => {
          if (col.id !== sourceColumnId) return col;
          const oldIndex = col.leads.findIndex((l) => l.id === active.id);
          const newIndex = col.leads.findIndex((l) => l.id === over.id);
          const newLeads = arrayMove(col.leads, oldIndex, newIndex);
          return { ...col, leads: newLeads };
        });
      }

      // Переносимо між колонками
      return prevColumns.map((col) => {
        if (col.id === sourceColumnId) {
          return { ...col, leads: col.leads.filter((l) => l.id !== active.id) };
        }
        if (col.id === destinationColumnId) {
          const overIndex = col.leads.findIndex((l) => l.id === over.id);
          console.log(overIndex);

          // dispatch(setLeadStage())
          const newLeads = [...col.leads];
          newLeads.splice(overIndex, 0, draggedLead);
          return { ...col, leads: newLeads };
        }
        dispatch(setLeadStage({ stage: col.id, leadID: draggedLead.id }));
        return col;
      });
    });
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box display="flex" gap={2} p={2} overflow="auto">
        {columns.map((column) => (
          <Paper key={column.id} sx={{ minWidth: 200, p: 2 }}>
            <Typography variant="h6">
              {t(`leads.stage.${column.title}`)}
            </Typography>
            <SortableContext
              items={column.leads.map((l) => l.id)}
              strategy={verticalListSortingStrategy}
            >
              {column.leads.map((lead, i) => (
                <SortableCard
                  key={`${lead.id}-${i}`}
                  id={lead.id.toString()}
                  title={lead.full_name}
                />
              ))}
            </SortableContext>
          </Paper>
        ))}
      </Box>
    </DndContext>
  );
};

export default Kanban;
