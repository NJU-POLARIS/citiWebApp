/**
 * Created by YZ on 2017/11/20.
 */
import * as appraisalService from '../services/appraisal';

export default {
  namespace: 'appraisal',
  state: {
    companyId: null,
    spOntimeData: null,
    spProfitData: null,
    spReturnData: null,
    spNeedData: null,
    pdOntimeData: null,
    pdProfitData: null,
    pdReturnData: null,
    pdNeedData: null,
    upChains: null,
    midChains: null,
    downChains: null,
  },
  reducers: {
    //get id from name
    saveId(state, { payload: companyId}) {
      return {
        ...state,
        companyId,
      };
    },
    drawspOntime(state, { payload: spOntimeData}) {
      return {
        ...state,
        spOntimeData,
      };
    },
    saveUpChains(state, { payload: upChains}) {
      return {
        ...state,
        upChains,
      };
    },
    saveMidChains(state, { payload: midChains}) {
      return {
        ...state,
        midChains,
      };
    },
    saveDownChains(state, { payload: downChains}) {
      return {
        ...state,
        downChains,
      };
    },

  },
  effects: {
    *fetchId({payload}, {call, put}) {
      yield put({
        type: 'saveId',
        payload: null,
      });
      const data= yield call(appraisalService.fetchId, payload);
      yield put({
        type: 'saveId',
        payload: data,
      });
    },
    *fetchspOntime({ payload }, { call, put }) {
      yield put({
        type: 'drawspOntime',
        payload: null,
      });
      const data = yield call(appraisalService.fetchSP_ontime, payload);
      yield put({
        type: 'drawspOntime',
        payload: data,
      });
    },

    //得到up供应链
    *fetchUpChains({payload}, {call, put}) {
      yield put({
        type: 'saveUpChains',
        payload: null,
      });
      // const id=yield call(appraisalService.fetchId, payload);
      const data=yield call(appraisalService.fetchUpstreamChains, payload);
      console.log(data);
      yield put({
        type: 'saveUpChains',
        payload: data,
      });
    },
    //得到mid供应链
    *fetchMidChains({payload}, {call, put}) {
      yield put({
        type: 'saveMidChains',
        payload: null,
      });
      const data=yield call(appraisalService.fetchMidstreamChains, payload);
      yield put({
        type: 'saveMidChains',
        payload: data,
      });
    },
    //得到down供应链
    *fetchDownChains({payload}, {call, put}) {
      yield put({
        type: 'saveDownChains',
        payload: null,
      });
      const data=yield call(appraisalService.fetchDownstreamChains, payload);
      yield put({
        type: 'saveDownChains',
        payload: data,
      });
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({
          type: 'fetchspOntime',
          payload: {
              supplierId: 1,
              manufacturerId: 2,
              time: '2017-10',
          },
        });
        dispatch({
          type: 'fetchId',
          payload: {
            companyName: 'TestChain1',
          },
        });
        dispatch({
          type: 'fetchUpChains',
          payload: {
            upstreamId: 4,
          },
        });
      });
    },
  },
};
