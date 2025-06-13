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
  low    = "low",
  medium = "medium",
  high   = "high",
}

export interface ILead {
  id                : string;
  client_id        ?: string;    // Якщо вже прив’язано до клієнта
  full_name         : string;    // Ім’я потенційного клієнта
  company_name     ?: string;    // Для B2B
  email            ?: string;
  phone            ?: string;
  source            : string;    // website, ads, referral, etc.
  stage             : string;
  assigned_to       : string;    // ID користувача
  created_at        : string;    // YYYY-MM-DD HH:mm:ss
  updated_at       ?: string;
  notes            ?: string;
  tags             ?: string[];  // Масив тегів
  priority         ?: string;
  campaign_id      ?: string;
  interaction_count?: number;
  last_contacted_at?: string;
  industry         ?: string;
  location         ?: string;
  budget           ?: number;
  website          ?: string;
  lead_score       ?: number;    // Від 0 до 100
  timezone         ?: string;
}

export interface KanbanColumnData {
  id   : string;
  title : string;
  leads: ILead[];
};

export interface IChangeStage {
    stage: string
    leadID: string | number
}