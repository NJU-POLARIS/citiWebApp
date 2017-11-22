/**
 * Created by YZ on 2017/11/22.
 */
import { stringify } from 'qs';
import request from '../utils/request';

export function applyForMove(param) {
  const { companyId, others} = param;
  console.log(param);
  return request(`/api/supplychains/financing/movable/${JSON.stringify(companyId)}`, {
    method: 'POST',
    body: others,
  });
}

/**
 * 获得库存净额
 * @param param
 * @returns {Object}
 */
export function getStockNet(param){
  const { companyId, twotime } = param;
  return request(`/api/supplychains/financing/inventory/net/${JSON.stringify(companyId)}?${stringify(twotime)}`);
}

export function getStockTypes(param){
  const { companyId } = param;
  return request(`api/supplychains/financing/inventory/${JSON.stringify(companyId)}`);
}
