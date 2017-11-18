/**
 * Created by YZ on 2017/11/17.
 */
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge, Modal, Form, Divider, Row, Col, Button } from 'antd';
import DescriptionList from '../../components/DescriptionList';
import styles from './Instable.less';

const FormItem = Form.Item;
const statusMap = ['success', 'error', 'warning'];
const Modall=Modal.info;
const { Description } =DescriptionList;

class InsTable extends PureComponent {
  state = {
    selectedRowKeys: [],
    modalVisible: true,
  };

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
      });
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter);
  }

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  }


  render() {

    const { selectedRowKeys, modalVisible } = this.state;
    const { data, pagination, loading } = this.props;

    const status = ['应收账款融资', '动产质押融资', '保兑仓融资'];

    const columns = [
      {
        title: '企业名称',
        dataIndex: 'no',
        info(){
          Modal.info({
            title: '企业信息',
            content: (
              <div>
                <p>cnm</p>
              </div>
            ),
          });
        },
        render (text, record, index) {
          return (
            <a>
              { text }
            </a>
          );
        }
      },
      {
        title: '融资方式',
        dataIndex: 'status',
        filters: [
          {
            text: status[0],
            value: 0,
          },
          {
            text: status[1],
            value: 1,
          },
          {
            text: status[2],
            value: 2,
          },
        ],
        render(val) {
          return <Badge status={statusMap[val]} text={status[val]} />;
        },
      },
    ];

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
    };

    console.log("data:"+data);

    return (
      <div>
        <Table
          loading={loading}
          rowKey={record => record.key}
          dataSource={data}
          columns={columns}
          pagination={paginationProps}
          onChange={this.handleTableChange}
        />
        <Modal
          title="企业信息"
          visible={modalVisible}
          onCancel={() => this.handleModalVisible()}
          footer={[<span />]}
        >
          <DescriptionList size="large" title="企业基本信息" style={{ marginBottom: 32 }}>
            <Description term="单位名称"></Description>
            <Description term="行业"></Description>
            <Description term="单位所在地"></Description>
            <Description term="统一社会信用代码"></Description>
            <Description term="联系电话"></Description>
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

export default InsTable;
