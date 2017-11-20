import { stringify } from 'qs';
import request from '../utils/request';

export function fetchGeneral(param) {
  return request(`/api/accountbook/total?${stringify(param)}`);
}
