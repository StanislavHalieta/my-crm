import { type FC } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import styled from "@emotion/styled";
import { MainChart, MainPieChart } from "../../components";

const Container = styled(Box)`
  padding: 24px;
  background: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

const StyledCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

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
        <Grid size={{ xs: 12, md: 4 }}>
          <MainPieChart />
        </Grid>
        {/* Графік замовлень */}
        <Grid size={{ xs: 12, md: 8 }}>
          <MainChart />
        </Grid>
        {/* Інші метрики */}
        {cards.map((card) => (
          <Grid container size={{ xs: 2, md: 3, lg: 3 }} key={card.id}>
          <Grid container size={{ xs: 2, md: 3, lg: 3 }} key={card.id}>
            <MainCard card={card} />
          </Grid>
        ))}
        {/* Графік замовлень */}

        {/* <Grid size={{ xs: 2, md: 6 }}> */}
        {/* <Kanban /> */}
        {/* <SpeedPieChart />
        </Grid> */}
      </StyledHomePageGrid>
    </StyledHomePage>
  );
};
