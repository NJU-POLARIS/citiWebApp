import { fetchCashMessage } from '../services/warning';

export default {
  namespace: 'cash',

  state: {
    loading: false,
    cashMessage: [],
  },

  effects: {
    *queryWarning({ payload }, { call, put }) {
      const response = yield call(fetchCashMessage, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveCashMessage',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveCashMessage(state, action) {
      return {
        ...state,
        warningMessage: action.payload,
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
