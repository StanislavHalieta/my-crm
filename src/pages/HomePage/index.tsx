import { type FC } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
import styled from "@emotion/styled";

const COLORS = ["#0057b7", "#ffd700", "#8884d8", "#82ca9d"];

const Container = styled(Box)`
  padding: 24px;
  background: ${({ theme }) => theme.palette.background.default};
  color: #1e1e1e;
`;

const StyledCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
`;

const chartData = [
  { name: "Ліди", value: 400 },
  { name: "У роботі", value: 300 },
  { name: "Угода", value: 200 },
  { name: "Закрито", value: 100 },
];

const ordersData = [
  { name: "Пн", value: 24 },
  { name: "Вт", value: 13 },
  { name: "Ср", value: 98 },
  { name: "Чт", value: 39 },
  { name: "Пт", value: 48 },
];

const HomePage: FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Воронка продажів */}
        <Grid size={{ xs: 12, md: 4 }}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Воронка продажів
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={chartData} dataKey="value" outerRadius={80} label>
                    {chartData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Графік замовлень */}
        <Grid size={{ xs: 12, md: 8 }}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Останні замовлення (по днях)
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={ordersData}>
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0057b7" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </StyledCard>
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
