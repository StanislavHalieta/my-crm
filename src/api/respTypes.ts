export enum ECallDirection {
  inbound = "inbound",
  outbound = "outbound",
}

export enum ESMSStatus {
  queued = "queued", // — повідомлення в черзі на відправку
  sent = "sent", //  — повідомлення успішно надіслано
  delivered = "delivered", //— підтверджено доставку (може залежати від провайдера)
  opened = "opened", // — повідомлення відкрито отримувачем (якщо відслідковується)
  bounced = "bounced", //— помилка доставки (неправильна адреса, поштова скринька не існує тощо)
  failed = "failed", // — загальна помилка при спробі надіслати
  spam = "spam", // — повідомлення позначене як спам або заблоковане
}

export enum EEmailStatus {
  queued = "queued", // — повідомлення в черзі на відправку
  sent = "sent", //  — повідомлення успішно надіслано
  delivered = "delivered", //— підтверджено доставку (може залежати від провайдера)
  opened = "opened", // — повідомлення відкрито отримувачем (якщо відслідковується)
  bounced = "bounced", //— помилка доставки (неправильна адреса, поштова скринька не існує тощо)
  failed = "failed", // — загальна помилка при спробі надіслати
  spam = "spam", // — повідомлення позначене як спам або заблоковане
  undelivered = "undelivered", //— підтверджена недоставка
  expired = "expired", //— повідомлення не вдалося доставити протягом встановленого часу
  rejected = "rejected", // — відхилено провайдером або пристроєм
}

export enum EEmailStatus {
  inbound = "inbound",
  outbound = "outbound",
}

export interface ICall {
  id: string | number;
  client_id: string;
  user_id: string;
  duration: number;
  direction: string;
  recording_url: string;
  date: string;
}

export interface IClientTag {
  client_id: string;
  tag_id: string;
}

export interface IClient {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  status: string;
  assigned_to: string;
  created_at: string;
}

export interface IDeal {
  id: string | number;
  lead_id: string;
  value: number;
  status: string;
  created_at: string;
  closed_at: string;
}

export interface IDelivery {
  id: string | number;
  order_id: string;
  provider: string;
  tracking_number: string;
  status: string;
}

export interface IEmail {
  id: string | number;
  client_id: string;
  subject: string;
  body: string;
  status: string;
  sent_at: string;
}

export interface IInvoice {
  id: string | number;
  deal_id: string;
  amount: number;
  status: string;
  issued_at: string;
}

export interface ILead {
  id: string | number;
  client_id: string;
  source: string;
  stage: string;
  assigned_to: string;
  created_at: string;
}

export interface ISMS {
  id: string | number;
  client_id: string;
  message: string;
  status: string;
  sent_at: string;
}

export interface ITag {
  id: string | number;
  name: string;
}

export interface ITask {
  id: string | number;
  title: string;
  description: string;
  status: string;
  assigned_to: string;
  due_date: string;
  related_type: string;
  related_id: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role_id: string;
  created_at: string;
}
