/* eslint-disable no-eval */
import { stringify } from 'qs';
import request from '../utils/request';

// 得到账套信息
export async function GetCompanyInfoByName(params) {
  const { companyName } = params;
  console.log(companyName);
  console.log(`/api/accounts/${eval(JSON.stringify(companyName))}?${stringify(params)}`);
  return request(`/api/accounts/${eval(JSON.stringify(companyName))}?${stringify(params)}`, {
    method: 'GET',
  });
}
export async function GetCompanyInfoById(params) {
  const { companyId } = params;
  const newparam = {
    id: companyId,
  }
  console.log(16);
  console.log(companyId);
  console.log(`/api/accounts/byId/${eval(JSON.stringify(companyId))}?${stringify(newparam)}`);
  return request(`/api/accounts/byId/${eval(JSON.stringify(companyId))}?${stringify(newparam)}`, {
    method: 'GET',
  });
}

// 修改账套信息
export async function ChangeCompanyInfo(params) {
  const { companyId } = params;
  console.log(`/api/accounts/${eval(JSON.stringify(companyId))}`);
  return request(`/api/accounts/${eval(JSON.stringify(companyId))}`, {
    method: 'PUT',
    body: params,
  });
}
