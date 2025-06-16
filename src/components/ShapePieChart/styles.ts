import styled from "@emotion/styled";

interface StyledShapePieChartProps {
  width?: number | string;
  height?: number | string;
}

const isNumber = (value?: string | number) => {
    if(!value) return
    if(typeof value === "number") return `${value}px`
    else return value
}

export const StyledShapePieChart = styled.div<StyledShapePieChartProps>`
  width: ${({ width }) => isNumber(width)};
  height: ${({ height }) => isNumber(height)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
