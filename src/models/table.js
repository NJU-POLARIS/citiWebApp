/**
 * Created by YZ on 2017/11/15.
 */
import * as tableService from '../services/table';

export default {
  namespace: 'table',
  state: {
    balancesheetData: null,
    profitData: null,
    cashflowData: null,
  },
  reducers: {
    fillBalanceSheet(state, { payload: balancesheetData }) {
      return {
        ...state,
        balancesheetData,
      };
    },

  },
  effects: {
    *fetchBalanceSheet({ payload: code }, { call, put }) {
      yield put({
        type: 'fillBalanceSheet',
        payload: null,
      });
      const { data } = yield call(tableService.fetchBalanceSheet(code));
      yield put({
        type: 'fillBalanceSheet',
        payload: data,
      });
    },
  },
  subscriptions: {

  },
};
