import { query as queryUsers, queryCurrent, changeCurrent } from '../services/user';

export default {
  namespace: 'user',

  state: {
    passwordStatus: 'no',
    list: [],
    loading: false,
    currentUser: {},
    userName: undefined,
    companyId: undefined,
    type: undefined,
  },

  effects: {
    *fetch(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchCurrent({ payload }, { call, put }) {
      const response = yield call(queryCurrent, payload);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    *changePassword({ payload }, { call, put }){
      yield call(changeCurrent, payload);
      yield put({
        type: 'saveNewPassword',
        payload: 'ok',
      })
    }
  },

  reducers: {
    saveNewPassword(state, action){
      return {
        ...state,
        passwordStatus: action.payload,
      };
    },
    save(state, action) {
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
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload,
        userName: action.payload.userName,
        type: action.payload.type,
        companyId: action.payload.companyId,
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload,
        },
      };
    },
  },
};
