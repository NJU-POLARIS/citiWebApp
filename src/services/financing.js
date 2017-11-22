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
  const { companyId, others} = param;
  console.log(param);
  return request(`/api/supplychains/financing/receivables/${JSON.stringify(companyId)}`, {
    method: 'POST',
    body: others,
  });
}

/**
 * 应收账款净额
 * @param param
 * @returns {Object}
 */
export function getNet(param){
  const { companyId, twotime } = param;
  // console.log(`/api/supplychains/financing/receivables/net/${JSON.stringify(companyId)}?${stringify(twotime)}`);
  return request(`/api/supplychains/financing/receivables/net/${JSON.stringify(companyId)}?${stringify(twotime)}`);
}

/**
 * 得到应收账款对象列表
 * @param param
 * @returns {Object}
 */
export function getCompanyObjects(param){
  const { companyId } = param;
  // console.log(`/api/supplychains/financing/receivables/${JSON.stringify(companyId)}`);
  return request(`/api/supplychains/financing/receivables/${JSON.stringify(companyId)}`);
}

/**
 * 动产质押融资
 */
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

/**
 * 获得库存种类
 * @param param
 * @returns {Object}
 */
export function getStockTypes(param){
  const { companyId } = param;
  return request(`api/supplychains/financing/inventory/${JSON.stringify(companyId)}`);
}

/**
 * 保兑仓融资--货物来源
 * @param param
 */
export function getProductSource(param) {

}

/**
 * 保兑仓融资--计划购买货物
 * @param param
 */
export function planToBuy(param){

}

