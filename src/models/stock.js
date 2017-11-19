/**
 * Created by YZ on 2017/11/19.
 */
import * as stockService from '../services/stock';

export default {
  namespace: 'stock',
  state: {
    materialSafeRelation: null,
  },
  reducers: {
    drawMaterialSafeRelation(state, { payload: materialSafeRelation }) {
      return {
        ...state,
        materialSafeRelation,
      };
    },
  },
  effects: {
    *fetchMaterialSafeRelation({ payload }, { call, put }) {
      yield put({
        type: 'drawMaterialSafeRelation',
        payload: null,
      });
      const data = yield call(tableService.fetchMaterialSafeRelation, payload);
      console.log(data);
      yield put({
        type: 'drawMaterialSafeRelation',
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
      });
    },
  },
};
