import { FC } from "react";
import { useTheme } from "@mui/material";
import { Cell, Pie, PieChart, XAxis } from "recharts";
import Needle from "./needle";

const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 120;

interface SpeedPieChartProps {}

const SpeedPieChart: FC<SpeedPieChartProps> = () => {
  const theme = useTheme();
  const data = [
    { name: "A", value: 80, color: "#ff0000" },
    { name: "B", value: 45, color: "#0000ff" },
    { name: "C", value: 25, color: "#000000" },
  ];
  return (
    <PieChart width={400} height={500}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#0000000"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {Needle({
        value,
        data,
        cx,
        cy,
        iR,
        oR,
        color: theme.palette.secondary.main,
      })}
    </PieChart>
  );
};

export default SpeedPieChart;
