/* eslint-disable no-unused-vars,prefer-destructuring,react/no-multi-comp,react/no-unused-state */
import React, { TableCell } from 'react';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import styles from './EditTable.less';
import { subjects5, subjects4, other, subjects3, subjects2, subjects1 } from '../../utils/persistence';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '科目编码',
      dataIndex: 'subjectId',
      width: '12.5%',
    }, {
      title: '科目名称',
      dataIndex: 'subjectName',
      width: '20%',
    }, {
      title: '方向',
      dataIndex: 'direction',
      width: '5%',
    }, {
      title: '期初余额',
      dataIndex: 'initialbalance',
      key: 'initialbalance',
      width: '10%',
      render: (text, record) => {
        return (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, '期初余额')}
          />
        );
      },
    }, {
      title: '借方累计',
      dataIndex: 'lend',
      key: 'lend',
      width: '10%',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, '借方累计')}
        />
      ),
    }, {
      title: '贷方累计',
      dataIndex: 'credit',
      key: 'credit',
      width: '10%',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, '贷方累计')}
        />
      ),
    }, {
      title: '发生额累计',
      dataIndex: 'sum',
      key: 'sum',
      width: '10%',
      value: 0,
    }, {
      title: '年初余额',
      dataIndex: 'outcome',
      key: 'outcome',
      width: '10%',
      value: 0,
    },
    ];
    this.state = {
      dataSource: this.getData,
      balance: subjects1,
      debt: subjects2,
      cleanBalance: subjects3,
      income: subjects4,
      fee: subjects5,
      others: other,
    };
  }
  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  getData = () => {
    const { identi } = this.props;
    switch (identi) {
      case 'balance':
        return (subjects1);
      case 'debt':
        return (subjects2);
      case 'cleanBalance':
        return (subjects3);
      default:
        break;
    }
  };
  calChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const findlend = dataSource.find(item => item.key === 'lend');
      const findCredit = dataSource.find(item => item.key === 'credit');
      if (findCredit && findlend) {
        findCredit[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  handleInitial = () => {
  }
  render() {
    const { identi } = this.props;
    const { dataSource, balance, cleanBalance, debt, income, fee, others } = this.state;
    const columns = this.columns;
    switch (identi) {
      case 'balance':
        return (
          <div>
            <Table bordered dataSource={subjects1} columns={columns} />
          </div>);
      case 'debt':
        return (
          <div>
            <Table bordered dataSource={subjects2} columns={columns} />
          </div>);
      case 'cleanBalance':
        return (
          <div>
            <Table bordered dataSource={subjects3} columns={columns} />
          </div>);
      case 'income':
        return (
          <div>
            <Table bordered dataSource={subjects4} columns={columns} />
          </div>);
      case 'fee':
        return (
          <div>
            <Table bordered dataSource={subjects5} columns={columns} />
          </div>);
      case 'others':
        return (
          <div>
            <Table bordered dataSource={other} columns={columns} />
          </div>);
      default:
        break;
    }
    /* return (
      <div>
        <Table bordered dataSource={this.getData} columns={columns} />
      </div>
    ); */
  }
}


export default EditableTable;
