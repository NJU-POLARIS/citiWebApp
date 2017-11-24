import { stringify } from 'qs';
import request from '../utils/request';

export async function fetchWarningMessage(params) {
  return request(`/api/data/warning?${stringify(params)}`);
}

export async function fetchCashMessage(params) {
  return request(`/api/data/cashpool?${stringify(params)}`);
}
