import * as voucherService from "../services/voucher";

export default {
  namespace: 'voucher',

  state: {
    loading: false,
    period: [],
    commitStatus: [],
    updateStatus: [],
    deleteStatus: [],
    vouchers: [],
    singleVoucher: [],
    latestVid: 0,
  },

  effects: {
    *fetchLatestVid({ payload }, { call, put }) {
      const response = yield call(voucherService.latestVoucherNumber, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveVid',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchAllVoucher({ payload }, { call, put }) {
      const response = yield call(voucherService.queryAllVoucher, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveVouchers',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },

    *searchVoucher({ payload }, { call, put }) {
      const response = yield call(voucherService.searchVoucher, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveVouchers',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
    *fetchSingleVoucher({ payload }, { call, put }) {
      const response = yield call(voucherService.querySingleVoucher(), payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveSingleVoucher',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },

    *commitVoucher({ payload }, { call, put }) {
      const response = yield call(voucherService.commitVoucher, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveCommit',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },

    *updateVoucher({ payload }, { call, put }) {
      const response = yield call(voucherService.updateVoucher, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'saveUpdate',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },

    *fetchPeriod({ payload }, { call, put }) {
      const response = yield call(voucherService.fetchPeriod, payload);
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      yield put({
        type: 'savePeriod',
        payload: response,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveVid(state, action) {
      return {
        ...state,
        latestVid: action.payload,
      }
    },
    saveVouchers(state, action) {
      return {
        ...state,
        vouchers: action.payload,
      }
    },
    saveSingleVoucher(state, action) {
      return {
        ...state,
        singleVoucher: action.payload,
      }
    },
    saveCommit(state, action) {
      return {
        ...state,
        commitStatus: action.payload,
      }
    },
    saveUpdate(state, action) {
      return {
        ...state,
        updateStatus: action.param,
      }
    },
    savePeriod(state, action) {
      return {
        ...state,
        period: action.payload,
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
