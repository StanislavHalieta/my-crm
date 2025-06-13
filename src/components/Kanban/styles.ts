import { Paper } from "@mui/material";
import  styled from "@emotion/styled";

export const Card = styled(Paper)<{ priority?: string }>`
  padding: 8px;
  margin-bottom: 8px;
  border-left: 5px solid
    ${({ priority }) =>
      priority === "high"
        ? "#f44336"
        : priority === "medium"
        ? "#ff9800"
        : "#9e9e9e"};
`;