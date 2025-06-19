import styled  from '@emotion/styled';
import { Box, Card, Paper } from '@mui/material';

export const BoardWrapper = styled(Box)`
  display: flex;
  gap: 16px;
  padding: 24px;
  overflow-x: auto;
`;

export const ColumnWrapper = styled(Paper)`
  min-width: 250px;
  padding: 16px;
  background-color: #fff;
`;

export const StyledCard = styled(Card)`
  background-color: #e3f2fd;
`;