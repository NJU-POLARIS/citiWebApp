/**
 * Created by YZ on 2017/11/20.
 */
import * as appraisalService from '../services/appraisal';

export default {
  namespace: 'appraisal',
  state: {
    m1:null,
    m1profit: null,
    m1operate: null,
    m1develop: null,
    m1debt: null,
    m2d1: null,
    m2d2: null,
    m2d3: null,
    m3: null,

  },
  reducers: {
    fillm1profit(state, {payload: m1profit}) {
      return {
        ...state,
        m1profit,
      };
    },
    fillm1operate(state, {payload: m1operate}) {
      return {
        ...state,
        m1operate,
      };
    },
    fillm1develop(state, {payload: m1develop}) {
      return {
        ...state,
        m1develop,
      };
    },
    fillm1debt(state, {payload: m1debt}) {
      return {
        ...state,
        m1debt,
      };
    },
    fillm2d1(state, {payload: m2d1}) {
      return {
        ...state,
        m2d1,
      };
    },
    fillm2d2(state, {payload: m2d2}) {
      return {
        ...state,
        m2d2,
      };
    },
    fillm2d3(state, {payload: m2d3}) {
      return {
        ...state,
        m2d3,
      };
    },
    fillm3(state, {payload: m3}) {
      return {
        ...state,
        m3,
      };
    },
    fillm1(state, {payload: m1}) {
      return {
        ...state,
        m1,
      };
    },
  },
  effects: {
    *fetchm1({ payload }, { call, put }) {
      const data = yield call(appraisalService.getModule1,payload);
      yield put({
        type: 'fillm1',
        payload: data,
      });
    },
    *fetchm2d1({ payload }, { call, put }) {
      const data = yield call(appraisalService.getModule2Data1,payload);
      yield put({
        type: 'fillm2d1',
        payload: data,
      });
    },
    *fetchm2d2({ payload }, { call, put }) {
      const data = yield call(appraisalService.getModule2Data2,payload);
      yield put({
        type: 'fillm2d2',
        payload: data,
      });
    },
    *fetchm2d3({ payload }, { call, put }) {
      const data = yield call(appraisalService.getModule2Data3,payload);
      yield put({
        type: 'fillm2d3',
        payload: data,
      });
    },
    *fetchm3({ payload }, { call, put }) {
      const data = yield call(appraisalService.getModule3,payload);
      yield put({
        type: 'fillm3',
        payload: data,
      });
    },
  },
  subscriptions: {
  },
};
