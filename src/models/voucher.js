import { fetchPeriod } from "../services/voucher";

export default {
  namespace: 'voucher',

  state: {
    loading: false,
    period: [],
  },

  effects: {
    *fetchPeriod({ payload }, { call, put }) {
      const response = yield call(fetchPeriod, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'savePeriod',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    savePeriod(state, action) {
      return {
        ...state,
        period: action.payload,
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
