import type { FC } from "react";
import { ResponsiveContainer, XAxis, YAxis } from "recharts";
import dayjs from "dayjs";
import { LinePlot, AreaPlot } from "@mui/x-charts";
import { StyledMainChart } from "./styles";
import { useTheme } from "@mui/material";
import mockChartData from "../../mocks/mockChartData.json";
import parseData from "./parseData";

// export enum ETrend {
//   up = "up",
//   down = "down",
//   flat = "flat",
// }

// export enum ECategory {
//   sales = "sales",
//   leads = "leads",
//   support = "support",
// }

export enum ERegion {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}

export interface DataPoint {
  date: string;
  value: number;
  trend: string;
  category: string;
  region: string;
  activeUsers: number;
}

interface MainChartProps {
  data?: Record<string, string | number>[];
  xAxis?: boolean;
  yAxis?: boolean;
  xKey?: string;
  yKey?: string;
}

const MainChart: FC<MainChartProps> = ({ xAxis, yAxis }) => {
  const theme = useTheme();
  const { dataX, dataY } = parseData(mockChartData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <StyledMainChart data={mockChartData}>
        <defs>
          <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor={theme.palette.gradients.chart}
              stopOpacity={60}
            />
            <stop
              offset="100%"
              stopColor={theme.palette.gradients.transperent}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <AreaPlot
          slots={{
            area: (props) => (
              <path
                {...props}
                fill="url(#gradientFill)" // ← ось тут магія
                stroke="none"
              />
            ),
          }}
        />

        <LinePlot />
        {xAxis && (
          <XAxis
            dataKey="date"
            tickFormatter={(value) => dayjs(value).format("DD.MM")}
          />
        )}
        {yAxis && <YAxis dataKey="value" />}
      </StyledMainChart>
    </ResponsiveContainer>
  );
};

export default MainChart;
