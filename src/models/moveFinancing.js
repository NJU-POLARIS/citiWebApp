/**
 * Created by YZ on 2017/11/21.
 */
import * as moveFinancingService from '../services/moveFinancing';

export default {
  namespace: 'moveFinancing',
  state: {
    stockTypes: null,
    companyId: null,
    type: null,
    net: null,
    pledge: null,
  },
  reducers: {
    fillStockTypes(state, { payload: stockTypes}){
      return {
        ...state,
        stockTypes,
      };
    },
    fillNet(state, {payload: net}){
      return {
        ...state,
        net,
      };
    },
    saveMove(state, { payload: { companyId, others: {type, net, pledge} } }) {
      return {
        ...state,
        companyId: companyId,
        type: type,
        net: net,
        pledge: pledge,
      };
    },
  },
  effects: {
    *applyForMove({payload: {companyId, others: {type, net, pledge} }},{call, put}){
      yield call(moveFinancingService.applyForMove, payload);
      yield put({
        type: 'saveMove',
        companyId: companyId,
        type: type,
        net: net,
        pledge: pledge,
      });
    },
    *fetchNet({payload}, {call, put}) {
      yield put({
        type: 'fillNet',
        payload: null,
      });
      const data = yield call(moveFinancingService.getStockNet, payload);
      yield put({
        type: 'fillNet',
        payload: data,
      });
    },
    *fetchStocktypes({payload}, {call,put}){
      yield put({
        type: 'fillStockTypes',
        payload: null,
      });
      const data = yield call(moveFinancingService.getStockTypes, payload);
      yield put({
        type: 'fillStockTypes',
        payload: data,
      });
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({
          type: 'fetchStockTypes',
          payload: {
            companyId: 1,
          },
        });
        dispatch({
          type: 'fetchNet',
          payload: {
            companyId: 1,
            twotime: {
              start: '2017-10',
              end: '2017-11',
            }
          },
        });
      });
    },
  },
};
