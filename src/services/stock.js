/**
 * Created by YZ on 2017/11/19.
 */
import { stringify } from 'qs';
import request from '../utils/request';

export function fetchMaterialMonitor(param) {
  // console.log("hhhh"+`/api/inventory/stock/material?${stringify(param)}`);
  return request(`/api/data/stock/material?${stringify(param)}`);
}
export function fetchMaterialSafeRelation(param) {
  console.log(`api/data/relation/safe/material?${stringify(param)}`);
  return request(`api/data/relation/safe/material?${stringify(param)}`);
}

export function fetchProductMonitor(param) {
  return request(`/api/data/stock/product?${stringify(param)}`);
}
export function fetchProductSafeRelation(param){
  return request(`api/data/relation/safe/product?${stringify(param)}`)
}
export function fetchStockTime(param) {

}
export function fetchOntimeTime(param) {

}
export function fetchReturnTime(param) {

}
export function fetchRawMaterialSafeStock(param) {

}
export function fetchProductSafeStock(param) {

}
