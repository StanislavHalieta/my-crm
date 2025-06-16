import { FC, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { renderActiveShape } from "./renderActiveShape";
import { useTheme } from "@emotion/react";

export interface IShapePieChartData {
  key: string | number;
  name: string;
  value: number;
}

interface ShapePieChartProps {
  data: IShapePieChartData[];
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
}

const ShapePieChart: FC<ShapePieChartProps> = ({
  width = 450,
  height = 250,
  innerRadius = 70,
  outerRadius = 80,
  data = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const COLORS = Object.values(theme.palette.charts);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={(props)=>renderActiveShape({...props, textColor: theme.palette.primary.light, valueColor: theme.palette.primary.dark})}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map(({ key }, index) => (
              <Cell key={`cell-${key}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ShapePieChart;
