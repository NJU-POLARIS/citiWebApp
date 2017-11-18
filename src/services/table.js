/**
 * Created by YZ on 2017/11/15.
 */
import { stringify } from 'qs';
import request from '../utils/request';

export function fetchBalanceSheet(param) {
  const { companyID, phase } = param;
  console.log(`/api/sheets/balance/${JSON.stringify(companyID)}?${stringify(phase)}`);
  return request(`/api/sheets/balance/${JSON.stringify(companyID)}?${stringify(phase)}`);
}


// param :{
//   code: 1,
//     others:
//   {
//     phase: "2017-10"
//   }
// }
