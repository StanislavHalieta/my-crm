import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../types";
import { IChangeStage, ILead, KanbanColumnData } from "./types";
import getLeadsForKanban from "../../helpers/getLeadsForKanban";

interface LeadState {
  data: ILead[];
  forKanban: KanbanColumnData[];
  error: string | null;
  loading: boolean;
}

const initialState: LeadState = {
  data: [],
  forKanban: [],
  error: null,
  loading: false,
};

export const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    fetchLeads: (state, _payload: PayloadAction<string>) => {
      state.loading = true;
    },
    getLeadsData: (state, { payload }: PayloadAction<ILead[]>) => {
      state.loading = false;
      state.data = payload;
    },
    getLeadsDataError: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
    setLeadsForKanban: (state, _payload: PayloadAction) => {
      state.forKanban = getLeadsForKanban(state.data);
    },
    setLeadStage: (state, { payload }: PayloadAction<IChangeStage>) => {
      state.data = state.data.map((lead) => {
        if (payload.leadID === lead.id) lead.id = payload.stage;
        return lead;
      });
      state.forKanban = getLeadsForKanban(state.data);
    },
  },
});

export const {
  fetchLeads,
  getLeadsData,
  getLeadsDataError,
  setLeadsForKanban,
  setLeadStage
} = leadSlice.actions;

export const selectLeads = (state: RootState) => state.leads.data;
export const selectLeadsForKanban = (state: RootState) => state.leads.forKanban;

export default leadSlice.reducer;
