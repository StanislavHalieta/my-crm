import type { FC } from "react";
import { LinePlot, AreaPlot, ChartsXAxis, ChartsYAxis } from "@mui/x-charts";
import { StyledMainChart } from "./styles";
import { useTheme } from "@mui/material";

// const dataX = [0, 1, 2, 3, 5, 8, 10, 12, 14, 16];
// const dataY = [5, 5.5, 2, 8.5, 1.2, 1.5, 6, 2.5, 9, 7];

type DataPoint = {
  date: string;
  value: number;
  trend: "up" | "down" | "flat";
  category: "sales" | "leads" | "support";
  region: "North" | "South" | "East" | "West";
  activeUsers: number;
};

const mockChartData:DataPoint[] = [
  { date: "2025-05-16T10:00:00Z", value: 117, trend: "flat", category: "sales", region: "South", activeUsers: 289 },
  { date: "2025-05-17T10:00:00Z", value: 134, trend: "up", category: "leads", region: "North", activeUsers: 462 },
  { date: "2025-05-18T10:00:00Z", value: 98, trend: "down", category: "support", region: "East", activeUsers: 315 },
  { date: "2025-05-19T10:00:00Z", value: 125, trend: "up", category: "sales", region: "West", activeUsers: 534 },
  { date: "2025-05-20T10:00:00Z", value: 87, trend: "flat", category: "leads", region: "South", activeUsers: 203 },
  { date: "2025-05-21T10:00:00Z", value: 111, trend: "down", category: "support", region: "North", activeUsers: 157 },
  { date: "2025-05-22T10:00:00Z", value: 130, trend: "up", category: "sales", region: "East", activeUsers: 493 },
  { date: "2025-05-23T10:00:00Z", value: 95, trend: "flat", category: "leads", region: "West", activeUsers: 276 },
  { date: "2025-05-24T10:00:00Z", value: 107, trend: "down", category: "support", region: "South", activeUsers: 301 },
  { date: "2025-05-25T10:00:00Z", value: 142, trend: "up", category: "sales", region: "North", activeUsers: 519 },
  { date: "2025-05-26T10:00:00Z", value: 88, trend: "flat", category: "leads", region: "East", activeUsers: 245 },
  { date: "2025-05-27T10:00:00Z", value: 123, trend: "up", category: "leads", region: "West", activeUsers: 431 },
  { date: "2025-05-28T10:00:00Z", value: 105, trend: "down", category: "support", region: "North", activeUsers: 168 },
  { date: "2025-05-29T10:00:00Z", value: 119, trend: "flat", category: "sales", region: "South", activeUsers: 377 },
  { date: "2025-05-30T10:00:00Z", value: 91, trend: "down", category: "leads", region: "East", activeUsers: 222 },
  { date: "2025-05-31T10:00:00Z", value: 136, trend: "up", category: "support", region: "West", activeUsers: 478 },
  { date: "2025-06-01T10:00:00Z", value: 108, trend: "flat", category: "sales", region: "North", activeUsers: 364 },
  { date: "2025-06-02T10:00:00Z", value: 114, trend: "up", category: "leads", region: "South", activeUsers: 402 },
  { date: "2025-06-03T10:00:00Z", value: 102, trend: "down", category: "support", region: "East", activeUsers: 278 },
  { date: "2025-06-04T10:00:00Z", value: 139, trend: "up", category: "sales", region: "West", activeUsers: 521 }
];

interface IData{
  dataX: number[]
  dataY: number[]
}
const parseData = (data: DataPoint[]) => {
  return data.reduce<IData>(
    (accum, item) => {
      accum.dataY.push(item.activeUsers);
      accum.dataX.push(Date.parse(item.date))
      return accum;
    },

    {
      dataX: [],
      dataY: [],
    }
  );
};

interface MainChartProps {
  data?: Record<string, string | number>[];
  xAxis?: boolean;
  yAxis?: boolean;
  xKey?: string;
  yKey?: string;
}

const MainChart: FC<MainChartProps> = ({ xAxis, yAxis }) => {
  const theme = useTheme();
  const {dataX, dataX: dataY} = parseData(mockChartData);

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
          <stop offset="0%" stopColor={theme.palette.gradients.chart} />
          <stop offset="100%" stopColor={theme.palette.gradients.transperent} />
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
