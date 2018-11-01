import React from 'react'

import { Button, Input, Modal, Table } from 'antd'
import Dialog from './Modal'
import { userCol } from '../../config/columnConfig'
import { IUser } from '../../config/interface'


interface IUserState {
  tableData: IUser[]
  query: any
  visible: boolean
  form: any
}

export class User extends React.Component<{}, IUserState> {
  constructor(props: any) {
    super(props)
    this.state = {
      form: {
        username: {
          value: ''
        },
        nickname: {
          value: ''
        },
        email: {
          value: ''
        },
        status: {
          value: ''
        },
        mobile: {
          value: ''
        },
      },
      query: {
        nickname: '',
        username: ''
      },
      tableData: [],
      visible: false,
    }
    this.changeUsername = this.changeUsername.bind(this)
  }

  public fetch() {
    this.setState({
      tableData: [
        {
          createTime: 1532931684373,
          email: 'aaa@bbb.ccc',
          id: '1231',
          mobile: 13845312354,
          nickname: 'aaa',
          status: 2,
          username: 'bbb'
        }
      ]
    })
  }

  public opt(type: string, ...data: any[]) {
    switch (type) {
      case 'add': {
        return this.add
      }
      case 'del': {
        return () => {
          console.log('dellll', data)
        }
      }
      case 'edit': {
        return () => {
          this.add()
          setTimeout(() => {
            console.log('settt')
            this.setState({
              form: {
                username: {
                  value: '11',
                },
                nickname: {
                  value: '22',
                },
                email: {
                  value: '33',
                },
                status: {
                  value: '44',
                },
                mobile: {
                  value: '55',
                },
              }
            })
          }, 2000)
        }
      }
    }
    return () => null
  }

  public componentDidMount() {
    this.fetch()
  }

  public query = () => {
    window.console.log('query..', this.state.query)
  }

  public add = () => {
    this.setState({
      visible: true
    })
  }

  public handleOk = () => {
    this.setState({
      visible: false
    })
  }

  public cancelModal = () => {
    this.setState({
      visible: false
    })
  }

  public delRecord = (id: string) => {
    window.console.log(id)
  }

  public handleSubmit = () => {
    window.console.log(1111)
  }

  public render() {
    const { visible, form } = this.state
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
          <Button onClick={this.add} className="search-block search-btn">
            新增
          </Button>
          <Button
            type="danger"
            onClick={this.add}
            icon="delete"
            className="search-block search-btn flr"
          >
            批量删除
          </Button>
        </div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          mask={false}
          // confirmLoading={confirmLoading}
          onCancel={this.cancelModal}
        >
          <Dialog
            cancel={this.cancelModal}
            data={form}
            submit={this.handleSubmit} />
        </Modal>
        <Table
          rowSelection={{}}
          columns={userCol.concat([
            {
              dataIndex: '',
              render: (text: any, record: any, index: any) => (
                <div className="opt-btns">
                  <Button onClick={this.opt('edit', record.id)}>编辑</Button>
                  <Button
                    onClick={this.opt('del', record.id)}
                    style={{ marginLeft: '10px' }}
                  >
                    删除
                  </Button>
                </div>
              ),
              title: 'Operation'
            }
          ])}
          dataSource={this.state.tableData}
          rowKey="id"
        />
      </div>
    )
  }

  private changeUsername(e: any) {
    this.setState({
      query: Object.assign(this.state.query, {
        username: e.target.value
      })
    })
  }
}

export default User
