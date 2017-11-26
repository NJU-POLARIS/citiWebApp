/**
 * Created by YZ on 2017/11/17.
 */
import * as institutionService from '../services/institutions';
import {fetchDataType1, fetchDataType2, fetchDataType3} from "../services/api";

export default {
  namespace: 'institutions',
  state: {
    list: [],
    pagination: {},
    loading: false,
    dataType1: [],
    dataType2: [],
    dataType3: [],
  },

  effects: {
    *fetchType1({ payload }, { call, put }) {
      const response = yield call(fetchDataType1(), payload);
      yield put({
        type: 'saveListType1',
        payload: response,
      });
    },
    *fetchType2({ payload }, { call, put }) {
      const response = yield call(fetchDataType2(), payload);
      yield put({
        type: 'saveListType2',
        payload: response,
      });
    },
    *fetchType3({ payload }, { call, put }) {
      const response = yield call(fetchDataType3(), payload);
      yield put({
        type: 'saveListType3',
        payload: response,
      });
    },
    *queryList({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveList',
        payload: payload,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },
  reducers: {
    saveListType1(state, action) {
      return {
        ...state,
        dataType1: action.payload,
      };
    },
    saveListType2(state, action) {
      return {
        ...state,
        dataType2: action.payload,
      };
    },
    saveListType3(state, action) {
      return {
        ...state,
        dataType3: action.payload,
      };
    },
    saveList(state, action) {
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
  },
};
