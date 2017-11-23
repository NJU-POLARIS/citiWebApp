/* eslint-disable object-shorthand */
import { GetCompanyId, RegisterUser, RegisterVoucher } from '../services/user';

export default {
  namespace: 'register',

  state: {
    submitting: false,
    status: false,
    // 用户信息
    user: undefined,
    userName: undefined,
    type: undefined,
    password: undefined,
    companyId: undefined,
    // 账套信息
    activeTime: undefined,
    companyName: undefined,
    location: undefined,
    email: undefined,
    firstIndustry: undefined,
    secondIndustry: undefined,
    scale: undefined,
    supplyChainIndex: undefined,

  },

  effects: {
    *submit({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      const voucherInfo = {
        activeTime: payload.activeTime,
        companyName: payload.companyName,
        location: payload.location,
        email: payload.email,
        firstIndustry: payload.firstIndustry,
        secondIndustry: payload.secondIndustry,
        scale: payload.scale,
        supplyChainIndex: payload.supplyChainIndex,
      }
      yield call(RegisterVoucher, voucherInfo);
      const { companyName } = payload;
      const companyN = {
        companyName: companyName,
      }
      const getId = yield call(GetCompanyId, companyN);
      const userInfo = {
        userName: payload.userName,
        type: payload.type,
        password: payload.password,
        companyId: getId,
      }
      yield call(RegisterUser, userInfo);
      yield put({
        type: 'registerHandle',
        payload: payload,
      });

      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
    *normalSubmit({ payload }, { call, put }){
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      const userInfo = {
        userName: payload.userName,
        type: 'NORMAL',
        password: '123456',
        companyId: payload.companyId,
      }
      yield call(RegisterUser, userInfo);



      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    }
  },

  reducers: {
    registerHandle(state, { payload }) {
      return {
        ...state,
        user: payload,
        status: 'pass',
        userName: payload.userName,
      };
    },
    changeSubmitting(state, { payload }) {
      return {
        ...state,
        submitting: payload,
      };
    },
  },
};
