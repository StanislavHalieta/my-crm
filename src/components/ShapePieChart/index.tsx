<<<<<<< HEAD
import { FC, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { renderActiveShape } from "./renderActiveShape";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface ShapePieChartProps {
  width?: number;
  height?: number;
}
const ShapePieChart: FC<ShapePieChartProps> = ({
  width = 450,
  height = 220,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const theme = useTheme();
  const COLORS = Object.values(theme.palette.charts);

  const onPieEnter = (_: unknown, index: number) => {
=======
// CustomActiveShapePieChart.tsx
import { FC, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { renderActiveShape } from "./renderActiveShape";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface ShapePieChartProps {
  width?: number;
  height?: number;
}
const ShapePieChart: FC<ShapePieChartProps> = ({
  width = 450,
  height = 220,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
    setActiveIndex(index);
  };

  return (
<<<<<<< HEAD
    <StyledShapePieChart width={width} height={height}>
      <Typography>{t(title)}</Typography>
=======
    <div style={{ width, height }}>
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
<<<<<<< HEAD
            activeShape={(props) =>
              renderActiveShape({
                ...props,
                textColor: theme.palette.primary.light,
                valueColor: theme.palette.primary.dark,
              })
            }
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map(({ key }, index) => (
              <Cell key={`cell-${key}`} fill={COLORS[index % COLORS.length]} />
=======
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
<<<<<<< HEAD
    </StyledShapePieChart>
=======
    </div>
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
  );
};

export default ShapePieChart;
