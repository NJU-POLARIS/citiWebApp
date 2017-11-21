/**
 * Created by YZ on 2017/11/16.
 */
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './form.less';
import {connect} from 'dva';

const Option = Select.Option;

@Form.create()
class stockFinancing extends React.Component {
  render() {
    const {productSource} = this.props;
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
      <Form layout="horizontal" className={styles.stockFinancing}>
        <Form.Item {...formItemLayout} label="计划购买货物">
          {getFieldDecorator('type', {
            rules: [{required: true, message: '请选择原材料或商品名称'}],
          })(
            <Select placeholder="选择计划购买货物">
              <Option value="白菜">白菜</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="货物来源">
          <Input/>
        </Form.Item>
        <Form.Item {...formItemLayout} label="拟购货物金额">
          {getFieldDecorator('tobuyPrice', {
            rules: [
              {required: true, message: '请输入拟购货物金额'},
              {pattern: /^(\d+)((?:\.\d+)?)$/, message: '请输入合法金额数字'},
            ],
          })(
            <Input prefix="¥" placeholder="请输入金额"/>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="保障金比例">
          {getFieldDecorator('safetyRatio', {
            rules: [
              {required: true, message: '请输入保障金比例'},
              {pattern: /^(\d+)((?:\.\d+)?)$/, message: '请输入合法数字'},
            ],
          })(
            <Input addonAfter="%" placeholder="请输入比例" />
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
          <Button type="primary" htmlType="submit">
            申请
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
stockFinancing.propTypes={};
function mapStateToProps(state) {
  return {
    productSource: state.receiveFinancing.productSource,
  };
}
export default connect(mapStateToProps)(stockFinancing);
