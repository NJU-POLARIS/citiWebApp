import { fetchGeneral, fetchBalance, fetchSummary } from '../services/book';

export default {
  namespace: 'book',

  state: {
    loading: false,
    general: [],
    balance: [],
    total: [],
  },

  effects: {
    *fetchGeneral({ payload }, { call, put }) {
      const response = yield call(fetchGeneral, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveGeneral',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchBalance({ payload }, { call, put }) {
      const response = yield call(fetchBalance, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveBalance',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchSummary({ payload }, { call, put }) {
      const response = yield call(fetchSummary, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveSummary',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveGeneral(state, action) {
      return {
        ...state,
        general: action.payload,
      };
    },
    saveBalance(state, action) {
      return {
        ...state,
        balance: action.payload,
      };
    },
    saveSummary(state, action) {
      return {
        ...state,
        summary: action.payload,
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
