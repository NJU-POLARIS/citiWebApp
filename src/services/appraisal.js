/**
 * Created by YZ on 2017/11/20.
 */
import { stringify } from 'qs';
import request from '../utils/request';
//根据公司名称获得公司id
export function fetchId(param){
  const { companyName } =param;
  return request(`api/accounts/id/${JSON.stringify(companyName)}`);
}
//获得上游公司所在的所有供应链
export function fetchUpstreamChains(param){
  const { upstreamId } =param;
  console.log(`/api/supplychains/up/${JSON.stringify(upstreamId)}`);
  return request(`/api/supplychains/up/${JSON.stringify(upstreamId)}`);
}
//获得中游公司所在的所有供应链
export function fetchMidstreamChains(midId){
  return request(`/api/supplychains/mid/${JSON.stringify(midId)}`);
}
//获得下游公司所在的所有供应链
export function fetchDownstreamChains(downId){
  return request(`/api/supplychains/down/${JSON.stringify(downId)}`);
}
/**
 * module 2
 * @param param
 * @returns {Object}
 */
//供应商与生产商之间的'准时交货率'与'退货率'
export function fetchSP_ontime(param) {
  const { supplierId, manufacturerId, time } = param;
  return request(`/api/supplychains/evaluation/module2/value1?supplierId=${supplierId}&manufacturerId=${manufacturerId}&time=${time}`);
}

/**
 * module 3
 */
export function fetchModule3(param){

}


