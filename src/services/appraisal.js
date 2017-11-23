/**
 * Created by YZ on 2017/11/20.
 */
import { stringify } from 'qs';
import request from '../utils/request';
export function getModule1(){
  return request(`/api/data/evaluation/module1`);
}
/**
 * module 2
 * @param param
 * @returns {Object}
 */
export function getModule2Data1(){
  return request(`/api/data/evaluation/module2/data1`);
}
export function getModule2Data2(){
  return request(`/api/data/evaluation/module2/data2`);
}
export function getModule2Data3(){
  return request(`/api/data/evaluation/module2/data3`);
}
/**
 * module 3
 */
export function getModule3(param){
  return request(`/api/data/evaluation/module3`);
}


