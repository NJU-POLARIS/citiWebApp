/* eslint-disable object-shorthand,no-trailing-spaces */
import { GetCompanyInfoById, ChangeCompanyInfo } from '../services/company';

export default {
  namespace: 'account',

  state: {
    submitting: false,
    status: false,
    // 账套信息
    currentCompany: {
    },

    companyId: undefined,
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
    *getInfo({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      const response = yield call(GetCompanyInfoById, payload);
      yield put({
        type: 'getCompanyId',
        payload: response,
      });

      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
    *changeInfo({ payload }, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      yield call(ChangeCompanyInfo, payload);

      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
  },

  reducers: {
    getCompanyId(state, { payload }) {
      return {
        ...state,
        user: payload,
        status: 'pass',
        currentCompany: payload,
        companyId: payload.companyId,
        activeTime: payload.activeTime,
        companyName: payload.companyName,
        location: payload.location,
        email: payload.email,
        firstIndustry: payload.firstIndustry,
        secondIndustry: payload.secondIndustry,
        scale: payload.scale,
        supplyChainIndex: payload.supplyChainIndex,

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
