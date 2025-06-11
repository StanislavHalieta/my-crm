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
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Воронка продажів */}
        <Grid size={{ xs: 12, md: 4 }}>
          <MainPieChart />
        </Grid>
        {/* Графік замовлень */}
        <Grid size={{ xs: 12, md: 8 }}>
          <MainChart />
        </Grid>

        {/* Інші метрики */}
        <Grid size={{ xs: 12, md: 4 }}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">Всього дзвінків: 312</Typography>
              <Typography variant="body2">
                Вхідні: 140 | Вихідні: 172
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">Email розсилки</Typography>
              <Typography variant="body2">
                Відправлено: 892 | Відкрито: 462
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">Активні оператори</Typography>
              <Typography variant="body2">Онлайн: 6 | Офлайн: 2</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
