import { Title } from "@mui/icons-material";
import { Card } from "@mui/material";
import { MockChart } from "./styles";
import { FC } from "react";

const FunnelSales:FC = () => {
  return (
    <Card>
      <Title>Воронка продажів - Графік</Title>
      <MockChart>Тут буде графік воронки продажів</MockChart>
    </Card>
  );
};

export default FunnelSales;