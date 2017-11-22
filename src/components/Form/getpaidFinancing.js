/* eslint-disable prefer-destructuring */
/**
 * Created by YZ on 2017/11/16.
 */
import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './form.less';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const Option = Select.Option;

@Form.create()
/**
 * 应收账款融资
 */
class getpaidFinancing extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields({ force: true },
      (err, values) => {
        if(!err) {
          this.props.dispatch({
            type: 'receiveFinancing/applyForReceive',
            payload: values,
          });
        }
      }
    );
  }

  handleChange(value) {
    companyName= value;
  }

  handleInputChange=(e)=>{
    const {dispatch} = this.props;
    dispatch({
      type: "receiveFinancing/saveMortgage",
      payload: e.target.value,
    });
  }

  render() {
    const { cid, companyName, net, mortgage, receiveCompanies, form } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    /**
     * 处理select数据
     * @type {Array}
     */
    const companyList=[];
    if(receiveCompanies) {
      for (let i = 0; i < receiveCompanies.length; i++) {
        companyList.push(<Option key={receiveCompanies.get(i)}>{receiveCompanies.get(i)}</Option>);
      }
    }

    return (
      <Form layout="horizontal" className={styles.getpaidFinancing} onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="应收账款对象">
          {getFieldDecorator('getpaidObject', {
            rules: [{required: true, message: '请选择公司名称'}],
          })(
            <Select placeholder="选择公司名称" onChange={this.handleChange}>
              {companyList}
            </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="应收账款净额">
          <Input value={net} disabled={true}/>
        </Form.Item>
        <Form.Item {...formItemLayout} label="应收账款抵押额">
          {getFieldDecorator('getpaidAmount', {
            rules: [
              {required: true, message: '请输入应收账款抵押额'},
              {pattern: /^(\d+)((?:\.\d+)?)$/, message: '请输入合法金额数字'},
            ],
          })(
            <Input prefix="¥" placeholder="请输入金额" onChange={this.handleInputChange}/>
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
getpaidFinancing.propTypes={};

function mapStateToProps(state) {
  return {
    cid: state.receiveFinancing.companyId,
    companyName: state.receiveFinancing.companyName,
    net: state.receiveFinancing.net,
    mortgage: state.receiveFinancing.mortgage,
    receiveCompanies: state.receiveFinancing.receiveCompanies,
  };
}

export default connect(mapStateToProps)(getpaidFinancing);
