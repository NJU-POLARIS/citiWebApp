/**
 * Created by YZ on 2017/11/19.
 */
import { stringify } from 'qs';
import request from '../utils/request';

export function fetchBalanceSheet(param) {
  const { companyId } = param;
  return request(`/api/inventory/relation/safe/material?${stringify(companyId)}`);
}
