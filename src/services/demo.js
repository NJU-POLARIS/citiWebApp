/* eslint-disable no-eval */
import { stringify } from 'qs';
import request from '../utils/request';

export async function querySubjects(param) {
  const { key, companyId } = param;
  return request(`/api/vouchers/${eval(JSON.stringify(key))}?${stringify(companyId)}`);
}

