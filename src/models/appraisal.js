/**
 * Created by YZ on 2017/11/20.
 */
import * as appraisalService from '../services/appraisal';

export default {
  namespace: 'appraisal',
  state: {
    spOntimeData: null,
    spProfitData: null,
    spReturnData: null,
    spNeedData: null,
    pdOntimeData: null,
    pdProfitData: null,
    pdReturnData: null,
    pdNeedData: null,
  },
  reducers: {
    drawspOntime(state, { payload: spOntimeData}) {
      return {
        ...state,
        spOntimeData,
      };
    },

  },
  effects: {
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
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({
          type: 'fetchspOntime',
          payload: {
            param: {
              supplierId: 1,
              producerId: 2,
              distributerId: 3,
              time: '2017-10',
            },
          },
        });
      });
    },
  },
};
