/**
 * Created by YZ on 2017/11/15.
 */
import { stringify } from 'qs';
import request from '../utils/request';

export function fetchBalanceSheet(param) {
  const { companyID, phase } = param;
  // console.log("api"+`/api/sheets/balance/${JSON.stringify(companyID)}?${stringify(phase)}`);
  return request(`/api/sheets/balance/${JSON.stringify(companyID)}?${stringify(phase)}`);
}

export function fetchProfit(param) {
  const { companyID, phase } = param;
  return request(`/api/sheets/profit/${JSON.stringify(companyID)}?${stringify(phase)}`);
}

export function fetchCashFlow(param) {
  const { companyID, phase } = param;
  return request(`/api/sheets/cashflow/${JSON.stringify(companyID)}?${stringify(phase)}`);
}

// param :{
//   code: 1,
//     others:
//   {
//     phase: "2017-10"
//   }
// }
