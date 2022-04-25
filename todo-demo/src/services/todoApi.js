import apisauce from 'apisauce';
import config from '../config';

export default () => {
  const api = apisauce.create({
    baseURL: `${config.apiBase}/todos`,
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'json'
  });

  const list = () => api.get('');
  const get = id => api.get(id);

  return {
    list,
    get
  };
};
