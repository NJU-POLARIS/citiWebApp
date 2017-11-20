import { fetchGeneral } from '../services/book';

export default {
  namespace: 'book',

  state: {
    loading: false,
    general: [],
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
  },

  reducers: {
    saveGeneral(state, action) {
      return {
        ...state,
        general: action.payload,
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
