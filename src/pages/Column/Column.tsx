import React from 'react'

import { Table } from 'antd'

import { columnCol } from '../../config/columnConfig'
import { IColumn } from '../../config/interface'

export class Column extends React.Component<{}, {
  tableData: IColumn[]
}> {

  constructor(props: any){
    super(props);
    this.state = {
      tableData: []
    }
  }

  public fetch() {
    window.console.log('fetch')
    this.setState({
      tableData: [
        {
          createTime: 1532931684373,
          desc: 'aaa',
          id: '1234',
          name: '13845312354',
          sort: 1,
          type: 1
        }
      ]
    })
  }

  public componentDidMount() {
    this.fetch()
  }

  public render() {
    return (
      <div className="wrap">
        <Table columns={columnCol} dataSource={this.state.tableData} rowKey="id" />
      </div>
    )
  }
}

export default Column
