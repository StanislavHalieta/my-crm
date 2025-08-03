<<<<<<< HEAD
import { Sector } from "recharts";

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: Record<string, string | number>;
  percent: number;
  value: number;
  textColor?: string
  valueColor?: string
}

export const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
  textColor = "#999",
  valueColor = "#333"
}: RenderActiveShapeProps) => {
=======

import {Sector } from "recharts";

export const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
<<<<<<< HEAD
        fill={textColor}
=======
        fill="#333"
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
      >
        {`Value: ${value}`}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
<<<<<<< HEAD
        fill={valueColor}
=======
        fill="#999"
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
