import { querySubjects } from '../services/demo';

export default {
  namespace: 'demo',

  state: {
    subjects: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(querySubjects);
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
