/**
 * Created by YZ on 2017/11/20.
 */
import React, { PureComponent } from 'react';
import { Table, Alert, Badge, Modal, Form, Divider, Row, Col, Button } from 'antd';
import DescriptionList from '../../components/DescriptionList';

const { Description } =DescriptionList;

export default class Cell extends PureComponent {
  state = {
    value: this.props.value,
    modalVisible: false,
  }
  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  }
  hideModal = () => {
    this.setState({
      modalVisible: false,
    });
  }
  render() {
    const { value } = this.state;
    return (
      <div>
      <a onClick={ this.showModal }>{value}</a>
        <Modal
          title="企业信息"
          visible={this.state.modalVisible}
          onCancel={ this.hideModal }
          footer={[<span />]}
        >
          <DescriptionList size="large" title="企业基本信息" style={{ marginBottom: 32 }}>
            <Description term="单位名称"></Description>
            <Description term="行业"></Description>
            <Description term="单位所在地"></Description>
            <Description term="统一社会信用代码"></Description>
            <Description term="联系电话"></Description>·
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }}/>
          <DescriptionList size="large" title="融资信息" style={{ marginBottom: 32 }}>
            <Description term="应收账款对象"></Description>
            <Description term="应收账款净额"></Description>
            <Description term="应收账款抵押额"></Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }}/>
          <DescriptionList size="large" title="供应链构成" style={{ marginBottom: 32 }}>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }}/>
          <DescriptionList size="large" title="企业报表查看" style={{ marginBottom: 32 }}>
            <Row>
              <Col md={8} sm={24}><Button type="primary">资产负债表</Button></Col>
              <Col md={8} sm={24}><Button type="primary">利润表</Button></Col>
              <Col md={8} sm={24}><Button type="primary">现金流量表</Button></Col>
            </Row>
            <br/>
          </DescriptionList>
        </Modal>
      </div>
    );
  }
}
