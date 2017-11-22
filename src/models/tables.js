/**
 * Created by YZ on 2017/11/15.
 */
import * as tableService from '../services/tables';

export default {
  namespace: 'tables',
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
    fillProfit(state, { payload: profitData }) {
      return {
        ...state,
        profitData,
      };
    },
    fillCashflow(state, { payload: cashflowData }) {
      return {
        ...state,
        cashflowData,
      };
    },
  },
  effects: {
    *fetchBalanceSheet({ payload }, { call, put }) {
      yield put({
        type: 'fillBalanceSheet',
        payload: null,
      });
      const data = yield call(tableService.fetchBalanceSheet, payload);
      console.log("fetch"+data);
      yield put({
        type: 'fillBalanceSheet',
        payload: data,
      });
    },
    *fetchProfit({ payload }, { call, put }) {
      yield put({
        type: 'fillProfit',
        payload: null,
      });
      const data = yield call(tableService.fetchProfit, payload);
      yield put({
        type: 'fillProfit',
        payload: data,
      });
    },
    *fetchCashflow({ payload }, { call, put }) {
      yield put({
        type: 'fillCashflow',
        payload: null,
      });
      const data = yield call(tableService.fetchCashFlow, payload);
      yield put({
        type: 'fillCashflow',
        payload: data,
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({
          type: 'fetchBalanceSheet',
          payload: {
            companyID: 1,
            phase: { phase: '2017-10' },
          },
        });
        dispatch({
          type: 'fetchProfit',
          payload: {
            companyID: 1,
            phase: { phase: '2017-10' },
          },
        });
        dispatch({
          type: 'fetchCashflow',
          payload: {
            companyID: 1,
            phase: { phase: '2017-10' },
          },
        });
        // console.log(pathname.split('/'));
        // if (pathname.indexOf('/fund/') === 0 && pathname.split('/').length === 3) {
        //   let id = pathname.split('/fund/')[1];
        //   window.scrollTo(0, 0);
        //   dispatch({
        //     type: 'fetchBalanceSheet',
        //     payload: 1,
        //   });
        // }
      });
    },
  },
};
