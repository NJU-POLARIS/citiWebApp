import { stringify } from 'qs';
import request from '../utils/request';

export async function fetchPeriod(params) {
  return request(`/api/vouchers/period?${stringify(params)}`);
}

export async function commitVoucher(params) {
  return request(`/api/vouchers`, {
    method: 'POST',
    body: params,
  });
}

export async function updateVoucher(params) {
  console.log(params);
  return request(`/api/vouchers`, {
    method: 'PUT',
    body: params,
  });
}

export async function querySingleVoucher(params) {
  const { voucherId, param } = params;
  return request(`/api/${eval(JSON.stringify(voucherId))}?${stringify(param)}`);
}

export async function queryAllVoucher(params) {
  const { companyId } = params
  return request(`/api/current/${JSON.stringify(companyId)}`);
}

export async function searchVoucher(params) {
  return request(`/api/voucher  s/search?${stringify(params)}`);
}

export async function queryStock(params) {
  const { variety, param } = params;
  return request(`/api/vouchers/stock/${eval(JSON.stringify(variety))}?${stringify(param)}`);
}

export async function queryBalance(params) {
  const { subjectId, time, param } = params;
  return request(`/api/subjects/balance/${eval(JSON.stringify(subjectId))}/${JSON.stringify(time)}?${stringify(param)}`)
}


