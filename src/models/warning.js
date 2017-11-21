import { fetchWarningMessage } from "../services/warning";

export default {
  namespace: 'warning',

  state: {
    loading: false,
    warningMessage: [],
  },

  effects: {
    *queryWarning({payload}, {call, put}) {
      const response = yield call(fetchWarningMessage, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveWarningMessage',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveWarningMessage(state, action) {
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
  }

};
