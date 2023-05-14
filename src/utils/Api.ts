import axios, {AxiosError, AxiosRequestConfig} from 'axios';
export interface IFetchSettings {
  method: AxiosRequestConfig['method'];
  body?: Record<string, any>;
  params?: Record<string, any>;
}

export interface IReq {
  relativeUrl: string;
  body?: Record<string, any>;
}

const baseUrl =
  'https://gslwn81z5i.execute-api.us-east-2.amazonaws.com/goose/technical-challenge';

const axApi = axios.create({
  baseURL: baseUrl,
});

const _fetch = async (relativeUrl: string, fetchSettings: IFetchSettings) => {
  try {
    return await axApi({
      method: fetchSettings.method,
      url: `${baseUrl}/${relativeUrl}`,
      data: fetchSettings.body,
    });
  } catch (err: any) {
    const error = err as AxiosError;
    throw error.response?.data;
  }
};

const _post = (relativeUrl: string, body: Record<string, any> = {}) => {
  return _fetch(relativeUrl, {method: 'POST', body});
};

const Api = {
  post: _post,
};

export default Api;
