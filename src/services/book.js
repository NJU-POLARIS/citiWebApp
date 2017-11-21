import { stringify } from 'qs';
import request from '../utils/request';

export function fetchGeneral(param) {
  return request(`/api/accountbook/total?${stringify(param)}`);
}

export function fetchBalance(param) {
  return request(`/api/accountbook/subjects/balance?${stringify(param)}`);
}

export function fetchSummary(param) {
  return request(`/api/accountbook/subjects/total?${stringify(param)}`);
}
