import Api from "../utils/api";

export const config = {
  baseUrl: 'http://localhost:7001'
}

const api: Api = new Api(config.baseUrl, (res) => {
  const { data } = res
  if (data.code === 0) {
    return data.data
  }
  throw new Error(data.desc)
})

export default api;
