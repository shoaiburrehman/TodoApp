import {Alert, Platform, ToastAndroid} from 'react-native';

export const showToast = (msg: string) => {
  setTimeout(() => {
    ToastAndroid.show(getMessage(msg), ToastAndroid.SHORT);
  }, 500);
};

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const handleResponse = ({response = {}, jsonResponse = {}}) => {
  switch (response.status) {
    case 200: {
      console.log('case 200');
      if (
        jsonResponse.hasOwnProperty('errors') ||
        (jsonResponse.hasOwnProperty('error') && jsonResponse.error == true)
      ) {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      } else {
        return Promise.resolve(jsonResponse);
      }
    }
    case 201: {
      console.log('case 201');
      if (
        jsonResponse.hasOwnProperty('errors') ||
        (jsonResponse.hasOwnProperty('error') && jsonResponse.error == true)
      ) {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      } else {
        return Promise.resolve(jsonResponse);
      }
    }
    default: {
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
  }
};
export const performNetworkRequest = async (url: string, configs: {}) => {
  url = encodeURI(url);
  try {
    const response = await fetch(url, configs);
    const jsonResponse = await response.json();
    return Promise.resolve({response, jsonResponse});
  } catch (e) {
    return Promise.reject(e);
  }
};
export const message = 'Something went wrong';
export const getMessage = (json: any) => {
  console.log('JSON   KKKKKK', json);
  switch (typeof json) {
    case 'string': {
      return json;
    }
    case 'object': {
      if (Array.isArray(json)) {
        var data = json[0];
        return getMessage(data);
      } else {
        if (json.errors) {
          const data = json.errors;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else if (json.error) {
          const data = json.error;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else if (json.message) {
          if (json.message) {
            return getMessage(json.message);
          } else if (json.error) {
            return getMessage(json.error);
          } else {
            return message;
          }
        } else if (json?.response) {
          const data = json?.response;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else {
          const data = json;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        }
      }
    }
    default: {
      return message;
    }
  }
};
export const jsonToFormdata = (json: any) => {
  var data = new FormData();
  const entries = Object.entries(json);
  entries.forEach(entry => {
    data.append(entry[0], entry[1]);
  });
  return data;
};
export const getConfigs = (method: string, body: any, formData = true) => {
  var headers = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };
  if (formData === true) {
    headers['Content-Type'] = 'multipart/form-data';
  }
  let configs = {
    method: method,
    headers: headers,
  };
  if (body) {
    if (method === 'POST' || method === 'PUT') {
      if (formData === true) {
        configs.body = jsonToFormdata(body);
      } else {
        configs.body = JSON.stringify(body);
      }
    }
  }
  return configs;
};
export const dataToQueryParameter = (data: any) => {
  if (typeof data === 'object') {
    if (!Array.isArray(data)) {
      var params = '?';
      const dataArray = Object.entries(data);
      if (dataArray.length > 0) {
        dataArray.forEach((entry, index) => {
          var amp = index < dataArray.length - 1 ? '&' : '';
          params = `${params}${entry[0]}=${entry[1]}${amp}`;
        });
        return params;
      }
    }
  } else if (typeof data === 'string') {
    return data;
  }
  return '';
};
