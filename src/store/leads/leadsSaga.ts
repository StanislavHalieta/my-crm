import { put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import mockLeads from '../../mocks/leads.json'; // 👈 імпорт моків
import { getLeadsDataError, fetchLeads, getLeadsData, setLeadsForKanban } from './leadsStore';

function* fetchLeadWorker(_action: PayloadAction<string>) {
  try {
    // const response = yield call(axios.get, `/api/leads/${action.payload}`);
    // const leads = response.data;

    // ❗ Тимчасово використовуємо моки

    yield put(getLeadsData(mockLeads));
    yield put(setLeadsForKanban());
  } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      yield put(getLeadsDataError(message));
    }
}

export function* leadsSaga() {
  yield takeLatest(fetchLeads, fetchLeadWorker);
}
