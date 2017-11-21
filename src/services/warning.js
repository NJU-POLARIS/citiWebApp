import { stringify } from 'qs';
import request from '../utils/request';

export async function fetchWarningMessage(params) {
  return request(`/api/financial?${stringify(params)}`)
}
