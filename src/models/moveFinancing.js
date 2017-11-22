/**
 * Created by YZ on 2017/11/21.
 */
import * as financingService from '../services/financing';

export default {
  namespace: 'moveFinancing',
  state: {

  },
  reducers: {

  },
  effects: {


  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {

      });
    },
  },
};
