import api from './config'

// 获取用户信息
export const getUser = (uid: number) => api.get(`/api/v1/user/${uid}`)
// 新增用户
export const addUser = (user: any) => api.post(`/api/v1/user/`, user)
// 删除用户
export const delUser = (uid: number) => api.delete(`/api/v1/user/${uid}`)