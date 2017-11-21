import React, { PureComponent } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider, InputNumber } from 'antd';
import styles from './NewVoucher.less';

import subjectSelector from '../../../components/Selector/SubjectSelector';

class NewVoucher extends PureComponent {
  constructor(props) {
    super(props);

    const { company_id, voucher_id, date, remark, voucher_maker, data } = this.props.value;
    this.state = {
      company_id: company_id,
      voucher_id: voucher_id,
      voucher_maker: voucher_maker,
      date: date,
      remark: remark,
      data: data,
    };
    console.log(this.state.voucher_maker);
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      if ('value' in nextProps) {
        const value = nextProps.value;
        this.setState(value);
      }
    }
  }
  getRowBylines(lines) {
    return this.state.data.filter(item => item.lines === lines)[0];
  }
  index = 1;
  cacheOriginData = {};
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.form.validateFieldsAndScroll((err, values) => {
  //     if (!err) {
  //       this.props.dispatch({
  //         type: 'form/submit',
  //         payload: values,
  //       });
  //     }
  //   });
  // }
  toggleEditable(e, lines) {
    e.preventDefault();
    const target = this.getRowBylines(lines);
    if (target) {
      // 进入编辑状态时保存原始数据
      if (!target.editable) {
        this.cacheOriginData[lines] = { ...target };
      }
      target.editable = !target.editable;
      this.setState({ data: [...this.state.data] });
    }
  }
  remove(lines) {
    const newData = this.state.data.filter(item => item.lines !== lines);
    this.setState({ data: newData });
    // this.props.onChange(newData);
    this.triggerChange(newData);
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  };

  newMember = () => {
    const newData = [...this.state.data];
    newData.push({
      lines: this.index,
      company_id: 1,
      voucher_id: "记-123",
      abstracts: '',
      subjects: '',
      debitAmount: 0,
      creditAmount: 0,
      supportOneList: [],
      supportTwoList: [],
      editable: true,
      isNew: true,
    });
    this.index += 1;
    this.setState({ data: newData });
  };
  handlelinesPress(e, lines) {
    if (e.lines === 'Enter') {
      this.saveRow(e, lines);
    }
  }
  handleFieldChange(e, fieldName, lines) {
    console.log(e.target.value);
    const newData = [...this.state.data];
    const target = this.getRowBylines(lines);
    if (target) {
      target[fieldName] = e.target.value;
      this.setState({ data: newData });
    }
    e.target.focus();
  }
  saveRow(e, lines) {
    e.persist();
    // save field when blur input
    setTimeout(() => {
      if (document.activeElement.tagName === 'INPUT' &&
        document.activeElement !== e.target) {
        return;
      }
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowBylines(lines);
      // if (!target.workId || !target.name || !target.department) {
      //   message.error('请填写完整成员信息。');
      //   e.target.focus();
      //   return;
      // }
      delete target.isNew;
      this.toggleEditable(e, lines);
      // this.props.onChange(this.state.data);
      this.triggerChange(this.state.data);
    }, 10);
  }

  cancel(e, lines) {
    this.clickedCancel = true;
    e.preventDefault();
    const target = this.getRowBylines(lines);
    if (this.cacheOriginData[lines]) {
      Object.assign(target, this.cacheOriginData[lines]);
      target.editable = false;
      delete this.cacheOriginData[lines];
    }
    this.setState({ data: [...this.state.data] });
  }
  render() {
    const columns = [{
      title: '摘要',
      dataIndex: 'abstracts',
      lines: 'abstracts',
      width: '20%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              autoFocus
              onChange={e => this.handleFieldChange(e, 'abstracts', record.lines)}
              onBlur={e => this.saveRow(e, record.lines)}
              onKeyPress={e => this.handlelinesPress(e, record.lines)}
              placeholder="摘要"
            />
          );
        }
        return text;
      },
    }, {
      title: '科目',
      dataIndex: 'subject',
      lines: 'subject',
      width: '20%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              onChange={e => this.handleFieldChange(e, 'subject', record.lines)}
              onBlur={e => this.saveRow(e, record.lines)}
              onKeyPress={e => this.handlelinesPress(e, record.lines)}
              placeholder="科目"
            />
          );
        }
        return text;
      },
    }, {
      title: '借方金额',
      dataIndex: 'debitAmount',
      lines: 'debitAmount',
      width: '20%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <InputNumber
              value={text}
              style={{ width: '100%' }}
              onChange={e => this.handleFieldChange(e, 'debitAmount', record.lines)}
              onBlur={e => this.saveRow(e, record.lines)}
              onKeyPress={e => this.handlelinesPress(e, record.lines)}
              formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
          );
        }
        return text;
      },
    }, {
      title: '贷方金额',
      dataIndex: 'creditAmount',
      lines: 'creditAmount',
      width: '20%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
              value={text}
              onChange={e => this.handleFieldChange(e, 'creditAmount', record.lines)}
              onBlur={e => this.saveRow(e, record.lines)}
              onKeyPress={e => this.handlelinesPress(e, record.lines)}
              placeholder="贷方金额"
            />
          );
        }
        return text;
      },
    }, {
      title: '操作',
      lines: 'action',
      render: (text, record) => {
        if (record.editable) {
          if (record.isNew) {
            return (
              <span>
                <a>保存</a>
                <Divider type="vertical" />
                <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.lines)}>
                  <a>删除</a>
                </Popconfirm>
              </span>
            );
          }
          return (
            <span>
              <a>保存</a>
              <Divider type="vertical" />
              <a onClick={e => this.cancel(e, record.lines)}>取消</a>
            </span>
          );
        }
        return (
          <span>
            <a onClick={e => this.toggleEditable(e, record.lines)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.lines)}>
              <a>删除</a>
            </Popconfirm>
          </span>
        );
      },
    }];

    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          pagination={false}
          rowClassName={(record) => {
            return record.editable ? styles.editable : '';
          }}
        />
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增成员
        </Button>
      </div>
    );
  }
}

export default NewVoucher;
