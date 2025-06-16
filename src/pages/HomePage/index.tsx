import { useEffect, type FC } from "react";
import { Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { fetchHomePage } from "../../store/home/homeSlice";
import { MainCard, MainChart, ShapePieChart } from "../../components";
import { ICard } from "../../components/MainCard";
import { StyledHomePage, StyledHomePageGrid } from "./styles";
import { callsSummary, emailsSummary } from "../../helpers";
import calls from "../../mocks/calls.json";
import emails from "../../mocks/emails.json";
import {
  fetchLeads,
  selectLeads,
  // selectLeadsForKanban,
  setLeadsForKanban,
} from "../../store/leads/leadsStore";
import summaryShapePiChartData from "../../components/ShapePieChart/summaryShapePieChartData";

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

const mockData = [
  { key: "1", name: "Group A", value: 400 },
  { key: "2", name: "Group A", value: 100 },
  { key: "3", name: "Group A", value: 200 },
  { key: "4", name: "Group B", value: 300 },
  { key: "5", name: "Group C", value: 300 },
  { key: "6", name: "Group D", value: 200 },
  { key: "7", name: "Group D", value: 80 },
  { key: "8", name: "Group D", value: 53 },
  { key: "9", name: "Group D", value: 75 },
  { key: "10", name: "Group D", value: 10 },
];

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  // const leadsForKanban = useAppSelector(selectLeadsForKanban);
  const leads = useAppSelector(selectLeads);

  useEffect(() => {
    dispatch(fetchHomePage(""));
    dispatch(fetchLeads(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLeadsForKanban());
  }, [leads, dispatch]);


  return (
    <StyledHomePage>
      <StyledHomePageGrid container spacing={2}>
        {/* Воронка продажів */}
        <Grid container size={{ xs: 2, md: 8, lg: 12 }}>
          <Typography>Me chart</Typography>
          <ShapePieChart data={summaryShapePiChartData(mockData)} />
        </Grid>
        {/* Інші метрики */}
        {cards.map((card) => (
          <Grid container size={{ xs: 2, md: 4, lg: 3 }} key={card.id}>
            <MainCard card={card} />
          </Grid>
        ))}
        {/* Графік замовлень */}
        <Grid container size={{ xs: 2, md: 8 }}>
          <MainChart xAxis yAxis />
        </Grid>
        {/* <Grid size={{ xs: 2, md: 6 }}> */}
        {/* <Kanban /> */}
        {/* <SpeedPieChart />
        </Grid> */}
      </StyledHomePageGrid>
    </StyledHomePage>
  );
};

export default HomePage;
