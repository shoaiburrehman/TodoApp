import {
  dataToQueryParameter,
  getConfigs,
  getMessage,
  handleResponse,
  performNetworkRequest,
} from './HelperFunction';
import {base_url} from './configs';

export const post = async (body, formData = false, queryParams) => {
  const url = base_url + dataToQueryParameter(queryParams);

  console.log('URL', url);

  const configs = getConfigs('POST', body, formData);

  try {
    const networkResult = await performNetworkRequest(url, configs);
    console.log('NETWORK RESULT', networkResult);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    console.log('e == ', e);
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const get = async (queryParams) => {
  const url = base_url + dataToQueryParameter(queryParams);
  console.log('URL GET', url);
  const configs = getConfigs('GET');

  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    // console.log('ressssss', result);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const deleteTask = async (queryParams) => {
  // const url = base_url + dataToQueryParameter(queryParams);
  const url = base_url + '/' + queryParams;
  console.log('URL GET', url);
  const configs = getConfigs('DELETE');

  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    // console.log('ressssss', result);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const put = async (body, formData = false, queryParams) => {
  const url = base_url + '/' + queryParams;
  const configs = getConfigs('PUT', body, formData);
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);
    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

const Api = {
  post: post,
  get: get,
  put: put,
  delete: deleteTask,
};
export default Api;
