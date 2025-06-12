import type { FC } from "react";
import { LinePlot, AreaPlot, ChartsXAxis, ChartsYAxis } from "@mui/x-charts";
import { StyledMainChart } from "./styles";

const dataX = [1, 2, 3, 5, 8, 10];
const dataY = [2, 5.5, 2, 8.5, 1.5, 5];

interface MainChartProps {
  data?: Record<string, unknown>[]
  xAxis?: boolean
  yAxis?: boolean
}

const MainChart: FC<MainChartProps> = ({xAxis, yAxis}) => {
  return (
    <StyledMainChart
      xAxis  = {[{ scaleType: "point", data: dataX }]}
      series = {[
        {
          type : "line",
          data : dataY,
          area : true,
          color: "#2196f3",   // лінія
        },
      ]}
    >
      <defs>
        <linearGradient id     = "gradientFill" x1 = "0" y1 = "0" x2 = "0" y2 = "1">
        <stop           offset = "0%" stopColor    = "rgba(33, 150, 243, 0.6)" />
        <stop           offset = "100%" stopColor  = "rgba(33, 150, 243, 0)" />
        </linearGradient>
      </defs>

      <AreaPlot
        slots={{
          area: (props) => (
            <path
              {...props}
              fill   = "url(#gradientFill)"  // ← ось тут магія
              stroke = "none"
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
