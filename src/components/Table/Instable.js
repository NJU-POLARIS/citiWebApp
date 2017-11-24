/**
 * Created by YZ on 2017/11/17.
 */
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge, Modal, Form, Divider, Row, Col, Button } from 'antd';
import DescriptionList from '../../components/DescriptionList';
import styles from './Instable.less';
import Cell from './Cell';

const FormItem = Form.Item;
const statusMap = ['success', 'error', 'warning'];
const Modall=Modal.info;
const { Description } =DescriptionList;

class InsTable extends PureComponent {
  state = {
    selectedRowKeys: [],
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

  render() {
    const { selectedRowKeys } = this.state;

    const { data, pagination, loading } = this.props;

    const status = ['应收账款融资', '动产质押融资', '保兑仓融资'];

    const columns = [
      {
        title: '企业名称',
        dataIndex: 'no',
        render (text){
          return(
            <Cell
              value={text}
              modalVisible={false}
            />
          )
        }
      }, {
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
      }, {
        title: '金额',
        dataIndex: 'amount',
      }
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
