/**
 * Created by YZ on 2017/11/17.
 */
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge, Modal, Form } from 'antd';

const FormItem = Form.Item;
const statusMap = ['success', 'error', 'warning'];
class InsTable extends PureComponent {
  state = {
    selectedRowKeys: [],
    modalVisible: false,
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
        render (text, record, index) {
          return (
            <a onClick={() => handleModalVisible(true)}>
              { text }
            </a>
          )
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
      </div>
    );
  }
}

export default InsTable;
