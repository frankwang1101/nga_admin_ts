import axios, { AxiosInstance } from 'axios';

export default class Api {
  private base = '';
  private validRes: (data: any) => any;
  private _INS: AxiosInstance;

  constructor(
    base = '',
    validRes: (data: any) => any,
    opts: {
      [key: string]: any;
    } = {},
  ) {
    const { timeout = 2000 } = opts;
    opts.withCredentials = true;
    this.base = base;
    this.validRes = validRes;
    this._INS = axios.create({
      ...opts,
      baseURL: base,
      timeout,
      transformResponse: (data: any) => {
        if (this.validRes) {
          return this.validRes(data);
        }
        return data;
      },
    });
  }

  public get(url: string, data = {}, opts = {}, valid = (a:any) => a) {
    return this.request('get', url, {
      params: data,
      ...opts,
      valid,
    });
  }
  public post(url: string, data = {}, opts = {}, valid = (a:any) => a) {
    return this.request('post', url, {
      data,
      ...opts,
      valid,
    });
  }
  public put(url: string, data = {}, opts = {}, valid = (a:any) => a) {
    return this.request('put', url, {
      data,
      ...opts,
      valid,
    });
  }
  public jsonp(url: string, data = {}, opts = {}, valid = (a:any) => a) {
    return 1
  }
  public delete(url: string, opts = {}, valid = (a:any) => a) {
    return this.request('put', url, {
      ...opts,
      valid,
    });
  }
  private request(
    type: string,
    url: string,
    opt: {
      [key: string]: any;
    },
  ) {
    const config = {
      ...opt,
    };
    if (opt.valid) {
      config.transformResponse = opt.valid;
    }
    delete opt.valid;
    return (this._INS as any)[type](url, config);
  }
}
