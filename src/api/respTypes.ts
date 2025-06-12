export enum ECallDirection {
  inbound = "inbound",
  outbound = "outbound",
}

export enum ESMSStatus {
  queued    = "queued",      // — повідомлення в черзі на відправку
  sent      = "sent",        // — повідомлення успішно надіслано
  delivered = "delivered",   // — підтверджено доставку (може залежати від провайдера)
  opened    = "opened",      // — повідомлення відкрито отримувачем (якщо відслідковується)
  bounced   = "bounced",     // — помилка доставки (неправильна адреса, поштова скринька не існує тощо)
  failed    = "failed",      // — загальна помилка при спробі надіслати
  spam      = "spam",        // — повідомлення позначене як спам або заблоковане
}

export enum EEmailStatus {
  queued    = "queued",      // — в черзі на відправку (вихідне)
  sent      = "sent",        // — надіслано (вихідне)
  delivered = "delivered",   // — доставлено (вихідне)
  opened    = "opened",      // — відкрито (вихідне)
  bounced   = "bounced",     // — не доставлено (вихідне)
  failed    = "failed",      // — помилка (вихідне)
  received  = "received",    // — отримано (вхідне)
  read      = "read",        // — прочитано (вхідне)
  spam      = "spam",        // — заблоковано/позначено як спам
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

export enum ELeadsStage {
  new           = "new",             // — новий лід, тільки зібраний/створений
  contacted     = "contacted",       // — вже встановлено перший контакт
  qualified     = "qualified",       // — підтверджено, що лід підходить (є потенціал)
  interested    = "interested",      // — виявив інтерес, можлива зустріч або дзвінок
  proposal_sent = "proposal_sent",   // — надіслано комерційну пропозицію
  negotiation   = "negotiation",     // — обговорення умов, ціни, термінів
  won           = "won",             // — угоду укладено, лід став клієнтом
  lost          = "lost",            // — відмовився / нецільовий
  cold          = "cold",            // — тимчасово неактивний, поставлено на паузу
  unreachable   = "unreachable",     // — неможливо зв'язатись
  spam          = "spam",            // — фейковий, спам-лід
  duplicate     = "duplicate",       // — виявлено дубль
}

export enum EPriority {
  low = "low",
  medium = "medium",
  high = "high",
}
export interface ILead {
  id           : string;
  client_id   ?: string;  // Якщо вже прив’язано до клієнта
  full_name   ?: string;  // Ім’я потенційного клієнта
  company_name?: string;  // Для B2B
  email       ?: string;
  phone       ?: string;
  source       : string;  // website, ads, referral, etc.
  stage        : string;
  assigned_to       : string;                     // ID користувача
  created_at        : string;                     // YYYY-MM-DD HH:mm:ss
  updated_at       ?: string;
  notes            ?: string;
  tags             ?: string[];                   // Масив тегів
  priority         ?: string;
  campaign_id      ?: string;
  interaction_count?: number;
  last_contacted_at?: string;
  industry         ?: string;
  location         ?: string;
  budget           ?: number;
  website          ?: string;
  lead_score       ?: number;                     // Від 0 до 100
  timezone         ?: string;
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
