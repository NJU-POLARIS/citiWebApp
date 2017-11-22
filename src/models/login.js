import { routerRedux } from 'dva/router';
import { fakeAccountLogin, fakeMobileLogin } from '../services/api';
import { queryLogin } from '../services/login';

export default {
  namespace: 'login',

  state: {
    currentUser: undefined,
    status: false,
    userName: false,
    companyId: undefined,
    type: false,
  },

  effects: {
    *accountSubmit({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      const response = yield call(queryLogin, payload);
      console.log(response);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          userName: false,
          status: false,
          type: false,
        },
      });
      yield put(routerRedux.push('/user/login'));
      yield put({
        type: 'changeStatus',
      });
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        currentUser: payload,
        status: payload.userName,
        userName: payload.userName,
        type: payload.type,
        companyId: payload.companyId,
      };
    },
    changeSubmitting(state, { payload }) {
      return {
        ...state,
        submitting: payload,
      };
    },
    changeStatus(state) {
      return {
        ...state,
        status: false,
      };
    },
  },
};
