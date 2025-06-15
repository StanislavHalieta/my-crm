import {
  memo,
  PureComponent,
  useCallback,
  useEffect,
  useState,
  type FC,
} from "react";
import { Box, Grid, useTheme } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { fetchHomePage } from "../../store/home/homeSlice";
import {
  Kanban,
  MainCard,
  MainChart,
  MainPieChart,
  ShapePieChart,
  SpeedPieChart,
} from "../../components";
import { ICard } from "../../components/MainCard";
import { QuoteItem, StyledHomePage, StyledHomePageGrid } from "./styles";
import { callsSummary, emailsSummary } from "../../helpers";
import calls from "../../mocks/calls.json";
import emails from "../../mocks/emails.json";
import {
  fetchLeads,
  selectLeads,
  selectLeadsForKanban,
  setLeadsForKanban,
} from "../../store/leads/leadsStore";
import {
  CartesianGrid,
  Cell,
  Funnel,
  FunnelChart,
  LabelList,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from "recharts";

const { inbound, outbound, total: totalCals } = callsSummary(calls);
const { queued, received, sent, total: totalEmails } = emailsSummary(emails);

const cards: ICard[] = [
  {
    description: `Вхідні: ${inbound} | Вихідні: ${outbound}`,
    id: "1",
    title: `Всього дзвінків: ${totalCals}`,
  },
  {
    description: `Відправлено: ${sent} | Відкрито: ${received} | В черзі на відправку ${queued}`,
    id: "2",
    title: `Email розсилки ${totalEmails}`,
  },
  {
    description: "Онлайн: 6 | Офлайн: 2",
    id: "3",
    title: "Активні оператори",
  },
  {
    description: "Закриті: 140 | В роботі: 21",
    id: "4",
    title: "Активні задачі 21",
  },
  {
    description: "ЕСВ: 81 504.92 грн | ПДВ: 25 354.54 грн",
    id: "5",
    title: "Податок",
  },
  {
    description: "Онлайн: 6 | Офлайн: 2",
    id: "6",
    title: "Звітність",
  },
];

const COLORS = [
  "#8889DD",
  "#9597E4",
  "#8DC77B",
  "#A5D297",
  "#E2CF45",
  "#F8C12D",
];

const colors = [
  "#8889DD",
  "#9597E4",
  "#8DC77B",
  "#A5D297",
  "#E2CF45",
  "#F8C12D",
];

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const leadsForKanban = useAppSelector(selectLeadsForKanban);
  const leads = useAppSelector(selectLeads);

  useEffect(() => {
    dispatch(fetchHomePage(""));
    dispatch(fetchLeads(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLeadsForKanban());
  }, [leads, dispatch]);
  useEffect(() => {
    console.log(leadsForKanban);
  }, [leadsForKanban]);

  return (
    <StyledHomePage>
      <StyledHomePageGrid container spacing={3}>
        {/* Воронка продажів */}
        <Grid size={{ xs: 4, md: 8 }}>
          <ShapePieChart />
        </Grid>
        {/* Графік замовлень */}
        <Grid size={{ xs: 2, md: 8 }}>
          <MainChart xAxis yAxis />
        </Grid>
        {/* Інші метрики */}
        {cards.map((card) => (
          <Grid size={{ xs: 2, md: 4 }} key={card.id}>
            <MainCard card={card} />
          </Grid>
        ))}
        <Grid size={{ xs: 2, md: 6 }}>
          {/* <Kanban /> */}
          <SpeedPieChart />
        </Grid>
      </StyledHomePageGrid>
    </StyledHomePage>
  );
};

export default HomePage;
