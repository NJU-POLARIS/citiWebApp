/* eslint-disable no-eval */
import { stringify } from 'qs';
import request from '../utils/request';

export async function querySubjects(param) {
  const { key, companyId } = param;
  console.log(`/api/vouchers/${eval(JSON.stringify(key))}?${stringify(companyId)}`);
  return request(`/api/vouchers/${eval(JSON.stringify(key))}?${stringify(companyId)}`);
}

