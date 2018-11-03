import React from 'react';

import { Button, Input, Modal, Table } from 'antd';
import Dialog from './Modal';
import { userCol } from '../../config/columnConfig';
import { IUser } from '../../config/interface';
import { getUserList } from '../../api/user';

interface IUserState {
  tableData: IUser[];
  query: any;
  visible: boolean;
  form: any;
}

export class User extends React.Component<{}, IUserState> {
  constructor(props: any) {
    super(props);
    this.state = {
      form: {
        username: {
          value: '',
        },
        nickname: {
          value: '',
        },
        email: {
          value: '',
        },
        status: {
          value: '',
        },
        mobile: {
          value: '',
        },
      },
      query: {
        nickname: '',
        username: '',
      },
      tableData: [],
      visible: false,
    };
    this.changeUsername = this.changeUsername.bind(this);
  }

  public async fetch() {
    try {
      const { username } = this.state.query;
      const list = await getUserList({
        username,
      });
      this.setState({
        tableData: list,
      });
    } catch (e) {
      console.log(e);
    }
  }

  public opt(type: string, ...data: any[]) {
    switch (type) {
      case 'add': {
        return () => {
          this.setState({
            visible: true,
          });
        };
      }
      case 'del': {
        return () => {
          console.log('dellll', data);
        };
      }
      case 'edit': {
        return () => {
          this.setState({
            visible: true,
            form: {
              ...data[0],
            },
          });
        };
      }
    }
    return () => null;
  }

  public componentDidMount() {
    this.fetch();
  }

  public query = () => {
    this.fetch();
  };

  public cancelModal = () => {
    this.setState({
      visible: false,
    });
  };

  public delRecord = (id: string) => {
    window.console.log(id);
  };

  public batchDel = () => {
    console.log('batch');
  }

  public handleSubmit = (data: any) => {
    console.log('receive submit data', data);
  };

  public render() {
    const { visible, form } = this.state;
    return (
      <div className="wrap">
        <div className="search">
          <Input
            value={this.state.query.username}
            placeholder="请输入用户名"
            onChange={this.changeUsername}
            className="search-block search-input"
          />
          <Button onClick={this.query} className="search-block search-btn">
            查询
          </Button>
          <Button onClick={this.opt('add')} className="search-block search-btn">
            新增
          </Button>
          <Button
            type="danger"
            onClick={this.batchDel}
            icon="delete"
            className="search-block search-btn flr"
          >
            批量删除
          </Button>
        </div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.cancelModal}
          mask={false}
          // confirmLoading={confirmLoading}
          onCancel={this.cancelModal}
        >
          <Dialog
            cancel={this.cancelModal}
            data={form}
            submit={this.handleSubmit}
          />
        </Modal>
        <Table
          rowSelection={{}}
          columns={userCol.concat([
            {
              dataIndex: '',
              render: (text: any, record: any, index: any) => (
                <div className="opt-btns">
                  <Button onClick={this.opt('edit', record)}>编辑</Button>
                  <Button
                    onClick={this.opt('del', record.id)}
                    style={{ marginLeft: '10px' }}
                  >
                    删除
                  </Button>
                </div>
              ),
              title: 'Operation',
            },
          ])}
          dataSource={this.state.tableData}
          rowKey="uid"
        />
      </div>
    );
  }

  private changeUsername(e: any) {
    this.setState({
      query: Object.assign(this.state.query, {
        username: e.target.value,
      }),
    });
  }
}

export default User;
