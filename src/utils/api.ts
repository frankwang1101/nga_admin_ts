import axios, { AxiosInstance } from 'axios'

export default class Api {
  private base = '';
  private validRes: (data: any) => any;
  private _ins: AxiosInstance;

  constructor(base = '', validRes: (data: any) => any, opts: {
    [key: string]: any
  } = {}) {
    const { timeout = 2000 } = opts
    opts.withCredentials = true
    base = this.base;
    validRes = this.validRes;
    this._ins = axios.create({
      ...opts,
      baseURL: base,
      timeout,
      transformResponse: (data) => {
        if (this.validRes) {
          return this.validRes(data)
        }
        return data
      }
    })
  }
  private request(type: string, url: string, opt: {
    [key: string]: any
  }) {
    const config = {
      ...opt
    }
    if (opt.valid) {
      config.transformResponse = opt.valid
    }
    delete opt.valid
    return this._ins[type](url, config)
  }
  public get(url: string, data = {}, opts = {}, valid = () => {}) {
    return this.request('get', url, {
      params: data,
      ...opts,
      valid,
    })
  }
  public post(url: string, data = {}, opts = {}, valid = () => {}) {
    return this.request('post', url, {
      data,
      ...opts,
      valid,
    })
  }
  public put(url: string, data = {}, opts = {}, valid = () => {}) {
    return this.request('put', url, {
      data,
      ...opts,
      valid,
    })
  }
  public jsonp(url: string, data = {}, opts = {}, valid = () => {}) {}
  public delete(url: string, opts = {}, valid = () => {}) {
    return this.request('put', url, {
      ...opts,
      valid,
    })
  }
}
