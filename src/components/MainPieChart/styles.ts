import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledMainPieChart = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.palette.background.paper};
`;