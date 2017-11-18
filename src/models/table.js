/**
 * Created by YZ on 2017/11/15.
 */
import * as tableService from '../services/table';

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

  },
  effects: {
    *fetchBalanceSheet({ payload }, { call, put }) {
      yield put({
        type: 'fillBalanceSheet',
        payload: null,
      });
      const { data } = yield call(tableService.fetchBalanceSheet, payload);
      console.log("models"+data);
      yield put({
        type: 'fillBalanceSheet',
        payload: data,
      });
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        dispatch({
          type: 'fetchBalanceSheet',
          payload: {
            companyID: 1,
            phase: {phase: "2017-10"},
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
