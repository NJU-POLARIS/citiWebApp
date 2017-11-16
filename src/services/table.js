/**
 * Created by YZ on 2017/11/15.
 */
import request from '../utils/request';

export function fetchBalanceSheet(code) {
  return request(`/sheet/balance/${code}`, {
    method: 'GET',
  });
}
