import { FC } from "react";
import { StyledMainPieChart } from "./styles";
import { useTranslation } from "react-i18next";

interface MainPieChartProps {}

interface IPieChart {
  id: number | string;
  value: number;
  label: string;
}

const dummyChartData = [
  { id: 0, value: 5, label: "charts.unpaid" },
  { id: 1, value: 35, label: "charts.paid" },
];

const MainPieChart: FC<MainPieChartProps> = () => {
  const { t } = useTranslation();
  return (
    <StyledMainPieChart
      colors={["#007bff", "#ffd700", "#f2f2f2"]}
      series={[
        {
          data: dummyChartData.map<IPieChart>((item) => ({
            ...item,
            label: t(item.label),
          })),
        },
      ]}
    />
  );
};

export default MainPieChart;
