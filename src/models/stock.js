/**
 * Created by YZ on 2017/11/19.
 */
import * as stockService from '../services/stock';

export default {
  namespace: 'stock',
  state: {
    materialSafeRelation: null,
    materialMonitor: null,
  },
  reducers: {
    drawMaterialSafeRelation(state, { payload: materialSafeRelation }) {
      return {
        ...state,
        materialSafeRelation,
      };
    },
  },
  fillMaterialMonitor(state, { payload: materialMonitor }) {
    return {
      ...state,
      materialMonitor,
    };
  },
  effects: {
    *fetchMaterialSafeRelation({ payload }, { call, put }) {
      yield put({
        type: 'drawMaterialSafeRelation',
        payload: null,
      });
      const data = yield call(stockService.fetchMaterialSafeRelation, payload);
      console.log(data);
      yield put({
        type: 'drawMaterialSafeRelation',
        payload: data,
      });
    },
    *fetchMaterialMonitor({ payload }, { call, put }) {
      yield put({
        type: 'fillMaterialMonitor',
        payload: null,
      });
      const data = yield call(stockService.fetchMaterialMonitor,payload);
      // console.log(data);
      yield put({
        type: 'fillMaterialMonitor',
        payload: data,
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({
          type: 'fetchMaterialSafeRelation',
          payload: {
            companyId: 1,
          },
        });
        dispatch({
          type: 'fetchMaterialMonitor',
          payload: {
            companyId: 1,
            time: Date.parse('2017-11-11'),
          },
        });
      });
    },
  },
};
