import api from './config'

// 获取板块
export const getColumn = (id: string) => api.get(`/api/v1/column/${id}`)
// 新增板块
export const addColumn = (column: any) => api.post(`/api/v1/column/`, column)
// 删除板块
export const delColumn = (id: string) => api.delete(`/api/v1/column/${id}`)