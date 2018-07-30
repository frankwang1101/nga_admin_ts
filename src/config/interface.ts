export interface IPost{
  id: string,
  title: string;
  content: any;
  tags?: string[];
  type: number;
  color: number;
  createTime: number;
  updateTime?: number;
}

export interface IColumn{
  id: string,
  name: string;
  desc: string;
  icon?: string;
  type: number;
  sort: number;
  createTime: number;
  updateTime?: number;
}

export interface IUser{
  id: string,
  nickname: string;
  username: string;
  mobile?: number;
  email?: string;
  status: number;
  createTime: number;
  updateTime?: number;
}
