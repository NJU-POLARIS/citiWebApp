/* eslint-disable no-unused-vars,prefer-destructuring,react/no-multi-comp,react/sort-comp */
import React from 'react';
import { connect } from 'dva';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import styles from './EditTable.less';
import { getData } from './SafeInventory';

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
      title: '产品/原材料',
      dataIndex: 'product',
      width: '30%',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'product')}
        />
      ),
    }, {
      title: '名称',
      dataIndex: 'name',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'name')}
        />
      ),
    }, {
      title: '库存量',
      dataIndex: 'Inventory',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'Inventory')}
        />
      ),
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 0 ?
            (
              <Popconfirm title="确认删除?" onConfirm={() => this.onDelete(record.key)}>
                <a href="#">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }];

    this.state = {
      dataSource: this.getData(),
      count: 2,
    };
  }
  getData = () => {
    const { data } = this.props;
    return data;
  };
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
  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Button icon="plus" className="editable-add-btn" onClick={this.handleAdd}>添加</Button>
        <Button icon="save" onClick="">保存</Button>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
export default connect(state => ({
  currentUser: state.login.currentUser,
  register: state.register,
}))(EditableTable);
