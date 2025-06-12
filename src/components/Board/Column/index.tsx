import { FC } from 'react';
import {  Typography, Box } from '@mui/material';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CardItem from '../CardItem';
import { ColumnWrapper } from '../styles';

type Props = {
  title: string;
  items: string[];
  droppableId: string;
};

// const ColumnWrapper = styled(Paper)`
//   min-width: 250px;
//   padding: 16px;
//   background-color: #fff;
// `;

interface ColumnProps{
  title: string;
  items: string[];
  droppableId: string;
};

const Column:FC<ColumnProps> = ({ title, items, droppableId }) =>{
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <ColumnWrapper
          ref={provided.innerRef}
          {...provided.droppableProps}
          elevation={snapshot.isDraggingOver ? 6 : 3}
        >
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {items.map((item, index) => (
              <Draggable key={item} draggableId={`Задача ${index + 1}`} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CardItem title={item} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        </ColumnWrapper>
      )}
    </Droppable>
  );
}

export default Column