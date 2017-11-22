/**
 * Created by YZ on 2017/11/16.
 */
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './form.less';
import {connect} from 'dva';
import {getStockTypes} from "../../services/financing";

const Option = Select.Option;

@Form.create()
  /**
   * 动产质押融资
   */
class debtFinancing extends React.Component {
  handleSubmit=(e) => {
    e.preventDefault();
    this.props.form.validateFields({ force: true },
      (err, values) => {
        if(!err) {
          this.props.dispatch({
            type: 'moveFinancing/applyForMove',
            payload: values,
          });
        }
      }
    );
  }
  render() {
    const { net, form, stockTypes, type, pledge } = this.props;
    const { getFieldDecorator } = this.props.form;

    const stockList = [];
    if(stockTypes){
      for(let i=0;i<stockTypes.length;i++){
        stockList.push(<Option key={stockTypes.get(i)}>{stockTypes.get(i)}</Option>);
      }
    }

    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    return (
      <Form layout="horizontal" className={styles.debtFinancing} onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="库存种类">
          {getFieldDecorator('type', {
            rules: [{required: true, message: '请选择原材料或商品名称'}],
          })(
            <Select placeholder="选择库存名称">
              {stockList}
            </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="库存净额">
          <Input value={net} disabled={true} />
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
          <Button type="primary" htmlType="submit">
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
    stockTypes: state.receiveFinancing.stockTypes,
    net: state.receiveFinancing.net,
  };
}
export default connect(mapStateToProps)(debtFinancing);
