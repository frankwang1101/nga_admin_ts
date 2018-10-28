import api from './config'

// 获取回复
export const getReply = (id: string) => api.get(`/api/v1/reply/${id}`)
// 新增回复
export const addReply = (reply: any) => api.post(`/api/v1/reply/`, reply)
// 删除回复
export const delReply = (id: string) => api.delete(`/api/v1/reply/${id}`)