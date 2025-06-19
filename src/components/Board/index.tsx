import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DragDropContext,
  DropResult,
  OnDragStartResponder,
} from "react-beautiful-dnd";
import Column from "./Column";
import { BoardWrapper } from "./styles";

const columns = [
  { id: "todo", titleKey: "kanban.todo", cards: ["Task 1", "Task 2"] },
  { id: "inProgress", titleKey: "kanban.inProgress", cards: ["Task 3"] },
  { id: "done", titleKey: "kanban.done", cards: ["Task 4"] },
];

const initialData = {
  todo: ["Задача 1", "Задача 2"],
  inProgress: ["Задача 3"],
  done: ["Задача 4"],
};

const Board: FC = () => {
  const { t } = useTranslation();
  const [columns, setColumns] = useState(initialData);

  const onDragEndHandler = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceItems = Array.from(columns[sourceCol]);
    const [removed] = sourceItems.splice(source.index, 1);

    if (sourceCol === destCol) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({ ...columns, [sourceCol]: sourceItems });
    } else {
      const destItems = Array.from(columns[destCol]);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [sourceCol]: sourceItems,
        [destCol]: destItems,
      });
    }
  };
  const onDragStartHandler = (res: DropResult) => {
    console.log("On Drag Start Handler", res);
  };
  const onDragUpdateHandler = (res: DropResult) => {
    console.log("On Drag Update Handler", res);
  };
  return (
    <DragDropContext
      onDragEnd={onDragEndHandler}
      onDragStart={onDragStartHandler}
      onDragUpdate={onDragUpdateHandler}
    >
      <BoardWrapper>
        <Column
          droppableId="todo"
          title={t("kanban.todo")}
          items={columns.todo}
        />
        <Column
          droppableId="inProgress"
          title={t("kanban.inProgress")}
          items={columns.inProgress}
        />
        <Column
          droppableId="done"
          title={t("kanban.done")}
          items={columns.done}
        />
      </BoardWrapper>
    </DragDropContext>
  );
};

export default Board;
