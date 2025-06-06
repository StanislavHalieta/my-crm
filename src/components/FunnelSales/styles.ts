import styled from 'styled-components';

// Контейнер карти і заголовка
export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  margin-bottom: 24px;
  max-width: 720px;
`;

// Заголовок секції
export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
  color: #222222;
`;

// Мок графіка — стилізований прямокутник
export const MockChart = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  user-select: none;
`;