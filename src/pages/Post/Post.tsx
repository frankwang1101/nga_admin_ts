import * as React from 'react'

import { Table } from 'antd'

import { postCol } from '../../config/columnConfig'
import { IPost } from '../../config/interface'



export class Post extends React.Component<{}, {
  tableData: IPost[]
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
          color: 1,
          content: 'aaa',
          createTime: 1532931684373,
          id: '1234',
          title: 'bbb',
          type: 1,
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
        <Table columns={postCol} dataSource={this.state.tableData} rowKey="id" />
      </div>
    )
  }
}

export default Post
