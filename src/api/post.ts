import api from './config'

// 获取帖子
export const getPost = (id: string) => api.get(`/api/v1/post/${id}`)
// 新增帖子
export const addPost = (post: any) => api.post(`/api/v1/post/`, post)
// 删除帖子
export const delPost = (id: string) => api.delete(`/api/v1/post/${id}`)