/* eslint-disable no-unused-vars,prefer-destructuring,react/no-multi-comp */
import React from 'react';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import styles from './EditTable.less';
import { getData } from './InitialSetting';

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
      dataIndex: 'code',
      width: '12.5%',
    }, {
      title: '科目名称',
      dataIndex: 'name',
      width: '20%',
    }, {
      title: '方向',
      dataIndex: 'direction',
      width: '5%',
    }, {
      title: '期初余额',
      dataIndex: 'initialbalance',
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
      width: '10%',
    }, {
      title: '年初余额',
      dataIndex: 'outcome',
      width: '10%',
    },
    ];

    this.state = {
      dataSource: getData(),
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
  handleInitial = () => {
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}


export default EditableTable;
