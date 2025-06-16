import { FC, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { renderActiveShape } from "./renderActiveShape";
import { useTheme } from "@emotion/react";
import { StyledShapePieChart } from "./styles";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface IShapePieChartData {
  key: string | number;
  name: string;
  value: number;
}

interface ShapePieChartProps {
  data: IShapePieChartData[];
  title: string,
  dataKey?: string;
  width?: number | string;
  height?: number | string;
  innerRadius?: number;
  outerRadius?: number;
}

const ShapePieChart: FC<ShapePieChartProps> = ({
  width = 450,
  height = 280,
  innerRadius = 70,
  outerRadius = 80,
  dataKey = "value",
  data = [],
  title
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const theme = useTheme();
  const COLORS = Object.values(theme.palette.charts);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <StyledShapePieChart width={width} height={height}>
      <Typography>{t(title)}</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
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
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey={dataKey}
            onMouseEnter={onPieEnter}
          >
            {data.map(({ key }, index) => (
              <Cell key={`cell-${key}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </StyledShapePieChart>
  );
};

export default ShapePieChart;
