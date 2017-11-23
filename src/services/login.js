/* eslint-disable no-unused-vars */
import { stringify } from 'qs';
import request from '../utils/request';


export async function queryLogin(params) {
// eslint-disable-next-line no-unused-vars
  const { userName, password } = params;
  console.log(`/api/users/login?${params}`);
  return request(`/api/users/login?${stringify(params)}`, {
    method: 'POST',
  });
}
