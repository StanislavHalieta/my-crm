import { memo, useCallback, useEffect, useState, type FC } from "react";
import { Grid } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { fetchHomePage, selectHome } from "../../store/home/homeSlice";
import {
  // Board,
  // HomeLeads,
  MainCard,
  MainChart,
  MainPieChart,
} from "../../components";
import { ICard } from "../../components/MainCard";
import { QuoteItem, StyledHomePage, StyledHomePageGrid } from "./styles";
import { callsSummary, emailsSummary } from "../../helpers";
import calls from "../../mocks/calls.json";
import emails from "../../mocks/emails.json";

const { inbound, outbound, total: totalCals } = callsSummary(calls);
const { queued, received, sent, total: totalEmails } = emailsSummary(emails);

const cards: ICard[] = [
  {
    description: "Вхідні: 140 | Вихідні: 172",
    id: "1",
    title: "Всього дзвінків: 312",
  },
  {
    description: "Відправлено: 892 | Відкрито: 462",
    id: "2",
    title: "Email розсилки",
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

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  // const leadsForKanban = useAppSelector(selectLeadsForKanban);
  const leads = useAppSelector(selectLeads);
  console.log(parseCardData(cards_1));

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
        <Grid size={{ xs: 4, md: 4 }}>
          <MainPieChart />
        </Grid>
        {/* Графік замовлень */}
        <Grid size={{ xs: 4, md: 8 }}>
          <MainChart />
        </Grid>
        {/* Інші метрики */}
        {cards.map((card) => (
          <Grid size={{ xs: 2, md: 4 }} key={card.id}>
            <MainCard card={card} />
          </Grid>
        ))}
        {/* <Grid sx={{ xs: 12, md: 4 }}>
          <HomeLeads />
        </Grid> */}
      </StyledHomePageGrid>
    </StyledHomePage>
  );
};
