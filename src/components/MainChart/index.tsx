import type { FC } from "react";
import { LinePlot, AreaPlot, ChartsXAxis, ChartsYAxis } from "@mui/x-charts";
import { StyledMainChart } from "./styles";
import { useTheme } from "@mui/material";

const dataX = [1, 2, 3, 5, 8, 10];
const dataY = [2, 5.5, 2, 8.5, 1.5, 5];

interface MainChartProps {
  data?: Record<string, unknown>[];
  xAxis?: boolean;
  yAxis?: boolean;
}

const MainChart: FC<MainChartProps> = ({ xAxis, yAxis }) => {
  const theme = useTheme();
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
