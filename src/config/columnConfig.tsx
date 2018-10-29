import * as dayjs from 'dayjs'

export const userCol: Array<{
  dataIndex: any;
  title: any;
  render?: any;
}> = [
  {
    dataIndex: 'nickname',
    title: 'Nickname',
  },
  {
    dataIndex: 'username',
    title: 'Username',
  },
  {
    dataIndex: 'mobile',
    title: 'Mobile',
  },
  {
    dataIndex: 'email',
    title: 'Email',
  },
  {
    dataIndex: 'status',
    title: 'Status'
  },
  {
    dataIndex: 'createTime',
    render: (date: Date | string | number | undefined) => dayjs(date).format('YYYY-MM-DD'),
    title: 'CreateTime',
  },
  {
    dataIndex: 'updateTime',
    render: (date: Date | string | number | undefined) => dayjs(date).format('YYYY-MM-DD'),
    title: 'UpdateTime'
  },
]

export const columnCol: any = [
  {
    dataIndex: 'name',
    title: 'Name',
  },
  {
    dataIndex: 'desc',
    title: 'Desc',
  },
  {
    dataIndex: 'icon',
    title: 'Icon',
  },
  {
    dataIndex: 'type',
    title: 'Type',
  },
  {
    dataIndex: 'sort',
    title: 'Sort'
  },
  {
    dataIndex: 'createTime',
    render: (date: Date | string | number | undefined) => dayjs(date).format('YYYY-MM-DD'),
    title: 'CreateTime',
  },
  {
    dataIndex: 'updateTime',
    render: (date: Date | string | number | undefined) => dayjs(date).format('YYYY-MM-DD'),
    title: 'UpdateTime'
  },
]

export const postCol: any = [
  {
    dataIndex: 'title',
    title: 'Title',
  },
  {
    dataIndex: 'content',
    title: 'Content',
  },
  {
    dataIndex: 'tags',
    render: (tags: string[]) => tags ? tags.join(',') : '',
    title: 'Tags',
  },
  {
    dataIndex: 'type',
    title: 'Type',
  },
  {
    dataIndex: 'color',
    title: 'Color'
  },
  {
    dataIndex: 'createTime',
    render: (date: Date | string | number | undefined) => dayjs(date).format('YYYY-MM-DD'),
    title: 'CreateTime',
  },
  {
    dataIndex: 'updateTime',
    render: (date: Date | string | number | undefined) => dayjs(date).format('YYYY-MM-DD'),
    title: 'UpdateTime'
  },
]

