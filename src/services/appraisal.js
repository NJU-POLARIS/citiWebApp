/**
 * Created by YZ on 2017/11/20.
 */
import { stringify } from 'qs';
import request from '../utils/request';

export function fetchSP_ontime(param) {
  const { supplierId, producerId, distributerId, time } = param;
  return request(`/api/supplychains/evaluation/module2/value1?${stringify(param)}`);
}
