import { ELeadsStage, ILead, KanbanColumnData } from "../store/leads/types";

const _getLeadsForKanban = (leads: ILead[]): KanbanColumnData[] => {
  const kanbanLeads: KanbanColumnData[] = [];
  Object.keys(ELeadsStage).map((stage) => {
    const currentLead = leads.find((lead) => lead.stage === stage);
    const current: KanbanColumnData = {
      id: stage,
      title: stage,
      leads: [],
    };
    if (currentLead) {
      const inKanban = kanbanLeads.find(({ id }) => currentLead.stage === id);
      if (inKanban) inKanban.leads.push(currentLead);
      else {
        current.id = stage;
        current.title = currentLead.full_name;
        current.leads.push(currentLead);
      }
    }
    kanbanLeads.push(current);
  });

  return kanbanLeads;
};

const getLeadsForKanban = (leads: ILead[]): KanbanColumnData[] => {
  const stages = Object.keys(ELeadsStage).map<KanbanColumnData>((stage) => ({
    id: stage,
    title: stage,
    leads: [],
  }));

  leads.forEach((lead) => {
    const currentStage = stages.find((stage) => stage.id === lead.stage);
    if (currentStage) {
      currentStage.leads.push(lead);
    }
     return currentStage;
  });

  return stages;
};

export default getLeadsForKanban;
