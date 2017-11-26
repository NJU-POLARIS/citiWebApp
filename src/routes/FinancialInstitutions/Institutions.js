/**
 * Created by YZ on 2017/11/16.
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd';
import Instable from '../../components/Table/Instable';
import styles from './Institutions.less';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

@connect(state => ({
  institutions: state.institutions,
  login: state.login,
}))
@Form.create()
export default class Institutions extends PureComponent {
  state = {
    selectedRows: [],
    formValues: {},
    data: [{
      key: '1',
      no: 'companyB1',
      status: '0',
      amount: '￥ 1,200,000'
    }, {
      key: '3',
      no: 'companyB1',
      status: '1',
      amount: '￥ 3,000,000'
    }, {
      key: '2',
      no: 'companyA1',
      status: '2',
      amount: '￥ 2,000,000',
    }],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'institutions/queryList',
      payload: [{
        key: '1',
        no: 'companyB1',
        status: '0',
        amount: '￥ 1,200,000'
      }, {
        key: '3',
        no: 'companyB1',
        status: '1',
        amount: '￥ 3,000,000'
      }, {
        key: '2',
        no: 'companyA1',
        status: '2',
        amount: '￥ 2,000,000',
      }],
    });

    dispatch({ type: 'institutions/fetchType1' });
    dispatch({ type: 'institutions/fetchType2' });
    dispatch({ type: 'institutions/fetchType3' });

  }

  handleTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'rule/fetch',
      payload: params,
    });
  }

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    dispatch({
      type: 'rule/fetch',
      payload: {},
    });
  }

  handleSelectRows = (rows) => {
    this.setState({
      selectedRows: rows,
    });
  }

  handleLogOut = (e) => {
    this.props.dispatch({
      type: 'login/logout',
    });
  }
  handleSearch = (e) => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const { no } = fieldsValue;
      switch(no) {
        case 'all':
          const n0 = [{
            key: '1',
            no: 'companyB1',
            status: '0',
            amount: '￥ 1,200,000'
          }, {
            key: '3',
            no: 'companyB1',
            status: '1',
            amount: '￥ 3,000,000'
          }, {
            key: '2',
            no: 'companyA1',
            status: '2',
            amount: '￥ 2,000,000',
          }];
          this.setState({ data: [...n0] });
          break;
        case 'companyB1':
          const n1 = [{
            key: '1',
            no: 'companyB1',
            status: '0',
            amount: '￥ 1,200,000'
          }, {
            key: '3',
            no: 'companyB1',
            status: '1',
            amount: '￥ 3,000,000'
          },];
          this.setState({ data: [...n1] });
          break;
        case 'companyA1':
          const n2 = [{
            key: '2',
            no: 'companyA1',
            status: '2',
            amount: '￥ 2,000,000',
          }];
          this.setState({ data: [...n2] });
          break;
        default:
          this.setState({ data: [] });
          break;
      }
      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };

      dispatch({
        type: 'rule/fetch',
        payload: values,
      });
    });
  }

  renderSimpleForm() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="企业名称">
              {getFieldDecorator('no')(
                <Input placeholder="请输入" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit" onClick={e => this.handleSearch(e)}>查询</Button>
              <Button style={{ marginLeft: 8 }} onClick={(e) => this.handleLogOut(e)}>登出</Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }



  render() {
    const t_data = [{
      key: '1',
      no: 'companyB1',
      status: '0',
      amount: '￥ 1,200,000'
    }, {
      key: '3',
      no: 'companyB1',
      status: '1',
      amount: '￥ 3,000,000'
    }, {
      key: '2',
      no: 'companyA1',
      status: '2',
      amount: '￥ 2,000,000',
    }];
    const { selectedRows } = this.state;
    const { institutions } = this.state;
    return (
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              {this.renderSimpleForm()}
            </div>
            <Instable
              selectedRows={selectedRows}
              data={this.state.data}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleTableChange}
            />
          </div>
        </Card>

    );
  }
}

