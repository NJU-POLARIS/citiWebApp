/* eslint-disable no-eval */
import { stringify } from 'qs';
import request from '../utils/request';

// 得到账套信息
export async function GetInventory(params) {
  const { companyId } = params;
  console.log(companyId);
  console.log(`/api/inventory/safe?${stringify(params)}`);
  return request(`/api/inventory/safe?${stringify(params)}`, {
    method: 'GET',
  });
}
export async function saveInventory(params) {
  const { companyId } = params;
  console.log(params);
  console.log(`/api/inventory/safe?${stringify(params)}`);
  return request(`/api/inventory/safe?${stringify(params)}`, {
    method: 'POST',
  });
}

