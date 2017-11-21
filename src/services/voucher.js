import { stringify } from 'qs';
import request from '../utils/request';

export function fetchPeriod(param) {
  console.log(param);
  return request(`/api/vouchers/period?${stringify(param)}`);
}
