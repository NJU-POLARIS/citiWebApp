/* eslint-disable prefer-destructuring */
/**
 * Created by YZ on 2017/11/16.
 */
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './form.less';

const Option = Select.Option;

@Form.create()
class getpaidFinancing extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    return (
      <Form layout="horizontal" className={styles.getpaidFinancing}>
        <Form.Item {...formItemLayout} label="应收账款对象">
          {getFieldDecorator('getpaidObject', {
            rules: [{required: true, message: '请选择公司名称'}],
          })(
            <Select placeholder="选择公司名称">
              <Option value="南京大学">南京大学</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="应收账款净额">
          <Input/>
        </Form.Item>
        <Form.Item {...formItemLayout} label="应收账款抵押额">
          {getFieldDecorator('getpaidAmount', {
            rules: [
              {required: true, message: '请输入应收账款抵押额'},
              {pattern: /^(\d+)((?:\.\d+)?)$/, message: '请输入合法金额数字'},
            ],
          })(
            <Input prefix="¥" placeholder="请输入金额"/>
          )}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {span: 24, offset: 0},
            sm: {
              span: formItemLayout.wrapperCol.span, offset: formItemLayout.labelCol.span,
            },
          }}
          label=""
        >
          <Button type="primary">
            申请
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default getpaidFinancing;
