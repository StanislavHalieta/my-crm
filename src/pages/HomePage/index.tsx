import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FunnelSales, MainChart } from "../../components";
import styled from "styled-components";

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Card = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  textAlign: "center",
  flex: "1 1 120px",
  minWidth: 120,
}));

const FlexRow = styled(Box)({
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
});

const TaskItem = styled(ListItem)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingLeft: 0,
  paddingRight: 0,
  justifyContent: "space-between",
}));

const SmallText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "4px 12px",
  borderRadius: theme.shape.borderRadius,
}));

const HomePage: React.FC = () => {
  return (
    <Box component="main" sx={{ p: 3, overflowY: "auto" }}>
      {/* 1. Дашборд */}
      <Section>
        <Typography variant="h5" gutterBottom>
          Дашборд
        </Typography>
        <FlexRow>
          {[
            { label: "Нові клієнти", value: 15 },
            { label: "Відкриті угоди", value: 23 },
            { label: "Нові замовлення", value: 10 },
            { label: "Виробничі завдання", value: 5 },
            { label: "Загальна сума продажів", value: "$12,000" },
            { label: "Системні сповіщення", value: 3 },
            { label: "Вхідні дзвінки", value: 7 },
          ].map(({ label, value }) => (
            <Card key={label}>
              <Typography variant="h4" component="div" gutterBottom>
                {value}
              </Typography>
              <Typography color="textSecondary">{label}</Typography>
            </Card>
          ))}
        </FlexRow>
      </Section>

      {/* 2. Активні задачі / нагадування */}
      <Section>
        <Typography variant="h5" gutterBottom>
          Активні задачі / нагадування
        </Typography>
        <List disablePadding>
          {[
            {
              task: "Перезвонити клієнту Іванову",
              due: "Сьогодні, 14:00",
              responsible: "Олег",
            },
            {
              task: "Підготувати звіт по замовленнях",
              due: "Завтра, 10:00",
              responsible: "Марія",
            },
            {
              task: "Перевірити статус виробництва",
              due: "П’ятниця",
              responsible: "Андрій",
            },
          ].map(({ task, due, responsible }, i) => (
            <TaskItem key={i}>
              <Typography>{task}</Typography>
              <SmallText>
                {due} — {responsible}
              </SmallText>
            </TaskItem>
          ))}
        </List>
        <ActionButton variant="contained" color="primary" sx={{ mt: 2 }}>
          + Нова задача
        </ActionButton>
      </Section>

      {/* 3. Останні дзвінки / листи */}
      <Section>
        <Typography variant="h5" gutterBottom>
          Останні дзвінки / листи
        </Typography>
        <List disablePadding>
          {[
            {
              type: "call",
              contact: "Петро",
              time: "10:30",
              action: "Передзвонити",
            },
            {
              type: "email",
              contact: "Олена",
              time: "09:15",
              action: "Відповісти",
            },
            {
              type: "call",
              contact: "Світлана",
              time: "08:00",
              action: "Додати нотатку",
            },
          ].map(({ type, contact, time, action }, i) => (
            <TaskItem key={i}>
              <Typography>
                <b>{contact}</b> ({type === "call" ? "дзвінок" : "лист"}) —{" "}
                {time}
              </Typography>
              <ActionButton variant="contained" color="primary" size="small">
                {action}
              </ActionButton>
            </TaskItem>
          ))}
        </List>
      </Section>

      {/* 4. Продажі та замовлення */}
      <Section>
        <Typography variant="h5" gutterBottom>
          Продажі та замовлення
        </Typography>
        <Box
          sx={{
            height: 150,
            backgroundColor: "primary.light",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "primary.main",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          <FunnelSales />
        </Box>
        <List disablePadding>
          {[
            {
              orderId: "ORD-001",
              client: "Іван Петренко",
              status: "В обробці",
            },
            {
              orderId: "ORD-002",
              client: "Олена Коваль",
              status: "Відправлено",
            },
            {
              orderId: "ORD-003",
              client: "Тарас Шевченко",
              status: "Виконано",
            },
          ].map(({ orderId, client, status }) => (
            <TaskItem key={orderId}>
              <Typography>
                {orderId} - {client}
              </Typography>
              <Typography fontWeight="bold">{status}</Typography>
            </TaskItem>
          ))}
        </List>
        <ActionButton variant="contained" color="primary" sx={{ mt: 2 }}>
          + Створити замовлення
        </ActionButton>
      </Section>

      {/* 5. Виробництво */}
      <Section>
        <Typography variant="h5" gutterBottom>
          Виробництво
        </Typography>
        <Box
          sx={{
            backgroundColor: "secondary.light",
            padding: 2,
            borderRadius: 2,
            color: "secondary.dark",
          }}
        >
          <Typography>
            Графік виробничих завдань / етапів (поки що заглушка)
          </Typography>
          <List disablePadding>
            <ListItem disableGutters>
              Замовлення ORD-001 — Підготовка матеріалів
            </ListItem>
            <ListItem disableGutters>
              Замовлення ORD-002 — Виробництво деталей
            </ListItem>
            <ListItem disableGutters>
              Замовлення ORD-003 — Фінальна збірка
            </ListItem>
          </List>
        </Box>
      </Section>

      {/* 6. Фінанси */}
      <Section>
        <Typography variant="h5" gutterBottom>
          Фінанси
        </Typography>
        <Box
          sx={{
            backgroundColor: "success.light",
            padding: 2,
            borderRadius: 2,
            color: "success.dark",
          }}
        >
          <Typography>
            <b>Баланс рахунку:</b> $25,600
          </Typography>
          <Typography>
            <b>Останні транзакції:</b>
          </Typography>
          <List disablePadding>
            <ListItem disableGutters>
              + $1,200 — Продаж замовлення ORD-003
            </ListItem>
            <ListItem disableGutters>- $300 — Закупівля матеріалів</ListItem>
            <ListItem disableGutters>- $150 — Оренда складу</ListItem>
          </List>
          <Typography fontStyle="italic" mt={1}>
            Нагадування про податкові звіти: 10 червня
          </Typography>
        </Box>
      </Section>

      {/* 7. Розсилки */}
      <Section>
        <Typography variant="h5" gutterBottom>
          Розсилки
        </Typography>
        <Box
          sx={{
            backgroundColor: "warning.light",
            padding: 2,
            borderRadius: 2,
            color: "warning.dark",
          }}
        >
          <Typography>
            <b>Останні email-кампанії:</b> 3
          </Typography>
          <Typography>
            <b>Останні SMS-кампанії:</b> 2
          </Typography>
          <ActionButton variant="contained" color="warning" sx={{ mt: 2 }}>
            + Нова розсилка
          </ActionButton>
        </Box>
      </Section>

      {/* 8. IP-телефонія */}
      <Section>
        <Typography variant="h5" gutterBottom>
          IP-телефонія
        </Typography>
        <Box
          sx={{
            backgroundColor: "info.light",
            padding: 2,
            borderRadius: 2,
            color: "info.dark",
          }}
        >
          <Typography>
            Інформація по дзвінках, статусах операторів та налаштуваннях
          </Typography>
        </Box>
      </Section>
    </Box>
  );
};

export default HomePage;
