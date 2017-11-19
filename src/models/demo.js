import { querySubjects } from '../services/demo';

export default {
  namespace: 'demo',

  state: {
    subjects: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(querySubjects, payload);
      yield put({
        type: 'getSubjects',
        payload: response,
      });
    },
  },

  reducers: {
    getSubjects(state, action) {
      return {
        ...state,
        subjects: action.payload,
      };
    },
  },
};
