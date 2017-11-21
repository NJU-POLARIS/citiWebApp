/**
 * Created by YZ on 2017/11/16.
 */
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './form.less';
import {connect} from 'dva';

const Option = Select.Option;

@Form.create()
class debtFinancing extends React.Component {
  render() {
    const {stockNet} = this.props;
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
      <Form layout="horizontal" className={styles.debtFinancing}>
        <Form.Item {...formItemLayout} label="库存种类">
          {getFieldDecorator('type', {
            rules: [{required: true, message: '请选择原材料或商品名称'}],
          })(
            <Select placeholder="选择库存名称">
              <Option value="白菜">白菜</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="库存净额">
          <Input value={stockNet} disabled={true} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="库存质押额">
          {getFieldDecorator('debtAmount', {
            rules: [
              {required: true, message: '请输入库存质押额'},
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
debtFinancing.propTypes={};
function mapStateToProps(state){
  return {
    stockNet: state.receiveFinancing.stockNet,
  };
}
export default connect(mapStateToProps)(debtFinancing);
