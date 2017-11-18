import request from '../utils/request';

export async function querySubjects() {
  return request('/api/subjects', {
    method: 'GET',
  });
}

