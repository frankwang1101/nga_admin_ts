import Api from "../utils/api";

export const config = {
  baseUrl: 'http://localhost:3000'
}

const api: Api = new Api(config.baseUrl, (res) => {
  if (res.code === 0) {
    return res.data
  }
  throw new Error(res.desc)
})

export default api;
