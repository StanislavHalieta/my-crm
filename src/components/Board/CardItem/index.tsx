import { FC } from 'react';
import {CardContent, Typography } from '@mui/material';
import { StyledCard } from '../styles';



interface CardProps{
  title: string;
};

const CardItem:FC<CardProps> = ({ title }) => {
  return (
    <StyledCard variant="outlined">
      <CardContent>
        <Typography variant="body2">{title}</Typography>
      </CardContent>
    </StyledCard>
  );
}

export default CardItem