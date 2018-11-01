import React from 'react'

import { Button, Col, Input, Row, Table } from 'antd'

import { userCol } from '../../config/columnConfig'
import { IUser } from '../../config/interface'

export class User extends React.Component<
  {},
  {
    tableData: IUser[]
    query: any
  }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      query: {
        nickname: '',
        username: ''
      },
      tableData: []
    }
    this.changeUsername = this.changeUsername.bind(this)
  }

  public fetch() {
    window.console.log('fetch')
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

  public componentDidMount() {
    this.fetch()
  }

  public query = () => {
    window.console.log('query..', this.state.query)
  }

  public add = () => {
    window.console.log('aaaaa')
  }

  public render() {
    return (
      <div className="wrap">
        <div className="search">
          <Row gutter={16} justify="space-between">
            <Col span={3}>
              <Input
                value={this.state.query.username}
                placeholder="请输入用户名"
                onChange={this.changeUsername}
              />
            </Col>
            <Col span={2}>
              <Button onClick={this.query}>查询</Button>
            </Col>
            <Col span={2}>
              <Button onClick={this.add}>新增</Button>
            </Col>
          </Row>
        </div>
        <Table
          columns={userCol}
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
