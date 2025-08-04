import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  GroupsOutlined,
  EmailOutlined,
  SmsOutlined,
  CallOutlined,
  AssignmentOutlined,
  LocalShippingOutlined,
  StorefrontOutlined,
  MonetizationOnOutlined,
  AccountBalanceOutlined,
  AssessmentOutlined,
  Home,
  PersonOutlined,
} from "@mui/icons-material";

export interface IMainMenu {
  key: string;
  label: string;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, never>, "svg">> & {
    muiName: string;
  };
  children?: IMainMenu[];
}

const mainMenu: IMainMenu[] = [
  {
    label: "menu.home",
    key: "",
    Icon: Home,
  },
  {
    label: "menu.auth",
    key: "auth",
    Icon: PersonOutlined,
    children: [
      { key: "login", label: "menu.auth.login" },
      { key: "register", label: "menu.auth.register" },
      { key: "auth.roles", label: "menu.auth.roles" },
    ],
  },
  // {
  //   label: "menu.auth",
  //   key: "auth",
  //   Icon: PersonOutlined,
  //   children: [
  //     { key: "login", label: "menu.auth.login" },
  //     { key: "register", label: "menu.auth.register" },
  //     { key: "auth.roles", label: "menu.auth.roles" },
  //   ],
  // },
  {
    key: "clients",
    label: "menu.clients",
    Icon: GroupsOutlined,
    children: [
      { key: "clients.cards", label: "menu.clients.cards" },
      { key: "clients.history", label: "menu.clients.history" },
      { key: "clients.contacts", label: "menu.clients.contacts" },
      { key: "clients.analytics", label: "menu.clients.analytics" },
      { key: "clients.segmentation", label: "menu.clients.segmentation" },
    ],
  },
  {
    key: "email",
    label: "menu.email",
    Icon: EmailOutlined,
    children: [
      { key: "email.confirmation", label: "menu.email.confirmation" },
      { key: "email.reminders", label: "menu.email.reminders" },
      { key: "email.service", label: "menu.email.service" },
      { key: "email.marketing", label: "menu.email.marketing" },
    ],
  },
  {
    key: "sms",
    label: "menu.sms",
    Icon: SmsOutlined,
    children: [
      { key: "sms.reminders", label: "menu.sms.reminders" },
      { key: "sms.notifications", label: "menu.sms.notifications" },
    ],
  },
  {
    key: "ipTelephony",
    label: "menu.ipTelephony",
    Icon: CallOutlined,
    children: [
      {
        key: "ipTelephony.calls.incoming",
        label: "menu.ipTelephony.calls.incoming",
      },
      {
        key: "ipTelephony.calls.outgoing",
        label: "menu.ipTelephony.calls.outgoing",
      },
      {
        key: "ipTelephony.calls.recordings",
        label: "menu.ipTelephony.calls.recordings",
      },
      { key: "ipTelephony.clientCards", label: "menu.ipTelephony.clientCards" },
    ],
  },
  {
    key: "tasks",
    label: "menu.tasks",
    Icon: AssignmentOutlined,
    children: [
      { key: "tasks.statuses", label: "menu.tasks.statuses" },
      { key: "tasks.taskManager", label: "menu.tasks.taskManager" },
      { key: "tasks.messages", label: "menu.tasks.messages" },
      { key: "tasks.chat", label: "menu.tasks.chat" },
    ],
  },
  {
    key: "delivery",
    label: "menu.delivery",
    Icon: LocalShippingOutlined,
    children: [
      { key: "delivery.novaPoshta", label: "menu.delivery.novaPoshta" },
      { key: "delivery.ukrPoshta", label: "menu.delivery.ukrPoshta" },
      { key: "delivery.meest", label: "menu.delivery.meest" },
      { key: "delivery.justin", label: "menu.delivery.justin" },
      { key: "delivery.dhl", label: "menu.delivery.dhl" },
      { key: "delivery.fedex", label: "menu.delivery.fedex" },
      { key: "delivery.international", label: "menu.delivery.international" },
    ],
  },
  {
    key: "marketplaces",
    label: "menu.marketplaces",
    Icon: StorefrontOutlined,
    children: [
      { key: "marketplaces.prom", label: "menu.marketplaces.prom" },
      { key: "marketplaces.rozetka", label: "menu.marketplaces.rozetka" },
      { key: "marketplaces.amazon", label: "menu.marketplaces.amazon" },
      { key: "marketplaces.ebay", label: "menu.marketplaces.ebay" },
      { key: "marketplaces.etsy", label: "menu.marketplaces.etsy" },
    ],
  },
  {
    key: "production",
    label: "menu.production",
    Icon: AssignmentOutlined,
    children: [
      { key: "production.orders", label: "menu.production.orders" },
      { key: "production.materials", label: "menu.production.materials" },
      { key: "production.statuses", label: "menu.production.statuses" },
    ],
  },
  {
    key: "sales",
    label: "menu.sales",
    Icon: MonetizationOnOutlined,
    children: [
      { key: "sales.orders", label: "menu.sales.orders" },
      { key: "sales.analytics", label: "menu.sales.analytics" },
      { key: "sales.customers", label: "menu.sales.customers" },
    ],
  },
  {
    key: "finance",
    label: "menu.finance",
    Icon: AccountBalanceOutlined,
    children: [
      { key: "finance.banks", label: "menu.finance.banks" },
      { key: "finance.taxes", label: "menu.finance.taxes" },
      { key: "finance.reports", label: "menu.finance.reports" },
    ],
  },
  {
    key: "analytics",
    label: "menu.analytics",
    Icon: AssessmentOutlined,
    children: [
      { key: "analytics.reports", label: "menu.analytics.reports" },
      { key: "analytics.kpis", label: "menu.analytics.kpis" },
      { key: "analytics.custom", label: "menu.analytics.custom" },
    ],
  },
];

export default mainMenu;
