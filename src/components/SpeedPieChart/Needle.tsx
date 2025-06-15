import { FC } from "react";

const RADIAN = Math.PI / 180;

export interface NeedleDataType {
  name: string;
  value: number;
  color: string;
}
interface NeedleProps{
   value: number,
  data: NeedleDataType[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  color: string
}
const Needle = (
  {value,
  data,
  cx,
  cy,
  iR,
  oR,
  color}:NeedleProps
) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export default Needle;
