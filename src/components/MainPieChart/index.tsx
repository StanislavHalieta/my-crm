import type { FC } from "react";
import type { FC } from "react";
import { StyledMainPieChart } from "./styles";
// import { useTranslation } from "react-i18next";
import { CardContent, Typography } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";


// interface IPieChart {
//   id: number | string;
//   value: number;
//   label: string;
// }
// const chartData = [
//   { name: "Ліди", value: 400 },
//   { name: "У роботі", value: 300 },
//   { name: "Угода", value: 200 },
//   { name: "Закрито", value: 100 },
// ];
const chartData = [
  { id: 0, value: 5, label: "charts.unpaid" },
  { id: 1, value: 35, label: "charts.paid" },
];

const COLORS = ["#0057b7", "#ffd700", "#8884d8", "#82ca9d"];

const MainPieChart: FC<MainPieChartProps> = () => {
  // const { t } = useTranslation();
  return (
    <StyledMainPieChart>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Воронка продажів
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
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
    </StyledMainPieChart>
  );
};

export default MainPieChart;
