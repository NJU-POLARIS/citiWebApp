/**
 * Created by YZ on 2017/11/20.
 */
import { stringify } from 'qs';
import request from '../utils/request';

/**
 * 申请应收账款融资
 * @returns {Object}
 */
export function applyForFinancing(param) {
  const { companyId } = param;
  console.log(param);
  return request(`/api/supplychains/financing/receivables/${JSON.stringify(companyId)}`, {
    method: 'POST',
    body: others,
  });
}
export function getNet(param){
  const { companyId, twotime } = param;
  console.log(`/api/supplychains/financing/receivables/net/${JSON.stringify(companyId)}?${stringify(twotime)}`);
  return request(`/api/supplychains/financing/receivables/net/${JSON.stringify(companyId)}?${stringify(twotime)}`);
}

/**
 * 得到应收账款对象列表
 * @param param
 * @returns {Object}
 */
export function getCompanyObjects(param){
  const { companyId } = param;
  console.log(`/api/supplychains/financing/receivables/${JSON.stringify(companyId)}`);
  return request(`/api/supplychains/financing/receivables/${JSON.stringify(companyId)}`);
}


