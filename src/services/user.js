/* eslint-disable no-eval */
import { stringify } from 'qs';
import request from '../utils/request';

export async function GetCompanyId(params) {
  const { companyName } = params;
  console.log(companyName);
  console.log(`/api/accounts/id/${eval(JSON.stringify(companyName))}?${stringify(params)}`);
  return request(`/api/accounts/id/${eval(JSON.stringify(companyName))}?${stringify(params)}`, {
    method: 'GET',
  });
}

export async function RegisterVoucher(params) {
  console.log(params);
  return request('/api/accounts', {
    method: 'POST',
    body: params,
  });
}

export async function RegisterUser(params) {
  return request('/api/users', {
    method: 'POST',
    body: params,
  });
}

export async function queryCurrent(params) {
  const { userName } = params;
  console.log(`/api/users/${eval(JSON.stringify(userName))}?${stringify(params)}`);
  return request(`/api/users/${eval(JSON.stringify(userName))}?${stringify(params)}`, {
    method: 'GET',
  });
}

export async function changeCurrent(params) {
  const { userName, oldPassword, newPassword } = params;
  console.log('/api/users');
  return request(`/api/users?${stringify(params)}`, {
    method: 'PUT',
  });
}
