/**
 * Created by YZ on 2017/11/17.
 */
import * as institutionService from '../services/institutions';

export default {
  namespace: 'institutions',
  state: {
    list: [],
    pagination: {},
    loading: false,
  },

  effects: {
    *queryList({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveList',
        payload: payload,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },
  reducers: {
    saveList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};
