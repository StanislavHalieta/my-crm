import { ELeadsStage, ILead } from "../api/respTypes";

interface IAccumLeads {
  newLead: number; // — новий лід, тільки зібраний/створений
  contacted: number; // — вже встановлено перший контакт
  qualified: number; // — підтверджено, що лід підходить (є потенціал)
  interested: number; // — виявив інтерес, можлива зустріч або дзвінок
  proposal_sent: number; // — надіслано комерційну пропозицію
  negotiation: number; // — обговорення умов, ціни, термінів
  won: number; // — угоду укладено, лід став клієнтом
  lost: number; // — відмовився / нецільовий
  cold: number; // — тимчасово неактивний, поставлено на паузу
  unreachable: number; // — неможливо зв'язатись
  spam: number; // — фейковий, спам-лід
  duplicate: number;
  total: number;
}

const leadsSummary = (leads: ILead[]) =>
  leads.reduce<IAccumLeads>(
    (accum, lead) => {
      switch (lead.stage) {
        case ELeadsStage.new:
          accum.newLead++;
          break;
        case ELeadsStage.contacted:
          accum.contacted++;
          break;
        case ELeadsStage.qualified:
          accum.qualified++;
          break;
        case ELeadsStage.interested:
          accum.interested++;
          break;
        case ELeadsStage.proposal_sent:
          accum.proposal_sent++;
          break;
        case ELeadsStage.negotiation:
          accum.negotiation++;
          break;
        case ELeadsStage.won:
          accum.won++;
          break;
        case ELeadsStage.lost:
          accum.lost++;
          break;
        case ELeadsStage.cold:
          accum.cold++;
          break;
        case ELeadsStage.unreachable:
          accum.unreachable++;
          break;
        case ELeadsStage.spam:
          accum.spam++;
          break;
        case ELeadsStage.duplicate:
          accum.duplicate++;
          break;
      }
      accum.total++;
      return accum;
    },
    {
      newLead: 0,
      contacted: 0,
      qualified: 0,
      interested: 0,
      proposal_sent: 0,
      negotiation: 0,
      won: 0,
      lost: 0,
      cold: 0,
      unreachable: 0,
      spam: 0,
      duplicate: 0,
      total: 0,
    }
  );

export default leadsSummary;