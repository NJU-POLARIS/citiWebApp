import request from '../utils/request';

export async function queryLogin(params) {
  return request('/api/users/login', {
    method: 'POST',
  });
}
