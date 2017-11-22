/**
 * Created by YZ on 2017/11/19.
 */
import * as stockService from '../services/stock';

export default {
  namespace: 'stock',
  state: {
    materialSafeRelation: null,
    materialMonitor: null,
    productSafeRelation: null,
    productMonitor: null,
  },
  reducers: {
    /**
     * 原材料库存监控表
     * @param state
     * @param materialSafeRelation
     * @returns {{materialSafeRelation: *}}
     */
    drawMaterialSafeRelation(state, {payload: materialSafeRelation}) {
      return {
        ...state,
        materialSafeRelation,
      };
    },
    fillMaterialMonitor(state, {payload: materialMonitor}) {
      return {
        ...state,
        materialMonitor,
      };
    },
    /**
     * 产品库存监控表
     */
    drawProductSafeRelation(state, {payload: productSafeRelation}) {
      return {
        ...state,
        productSafeRelation,
      };
    },
    fillProductMonitor(state, {payload: productMonitor}) {
      return {
        ...state,
        productMonitor,
      }
    }

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
    *fetchProductSafeRelation({ payload }, {call, put }){
      yield put({
        type: 'drawProductSafeRelation',
        payload: null,
      });
      const data = yield call(stockService.fetchProductSafeRelation, payload);
      yield put({
        type: 'drawProductSafeRelation',
        payload: data,
      });
    },
    *fetchProductMonitor({ payload }, {call, put }) {
      yield put({
        type: 'fillProductMonitor',
        payload: null,
      });
      const data = yield call(stockService.fetchProductMonitor, payload);
      yield put({
        type: 'fillProductMonitor',
        payload: data,
      });
    }
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
        dispatch({
          type: 'fetchProductSafeRelation',
          payload: {
            companyId: 2,
          },
        });
        dispatch({
          type: 'fetchProductMonitor',
          payload: {
            companyId: 2,
            time: Date.parse('2017-11-11'),
          },
        });
      });
    },
  },
};
