import type { FC } from "react";
import { LinePlot, AreaPlot, ChartsXAxis, ChartsYAxis } from "@mui/x-charts";
import { StyledMainChart } from "./styles";
import { useTheme } from "@mui/material";
import parseData from "./parseData";
import mockChartData from "../../mocks/mockChartData.json";

export enum ETrend {
  up = "up",
  down = "down",
  flat = "flat",
}

export enum ECategory {
  sales = "sales",
  leads = "leads",
  support = "support",
}

export enum ERegion {
  North ="North",
  South =  "South",
  East = "East",
  West = "West"
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
    <StyledMainChart
      xAxis={[{ scaleType: "linear", data: dataX }]}
      series={[
        {
          type: "line",
          data: dataY,
          area: true,
          color: theme.palette.gradients.line,
        },
      ]}
    >
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
      {xAxis && <ChartsXAxis />}
      {yAxis && <ChartsYAxis />}
    </StyledMainChart>
  );
};

export default MainChart;
