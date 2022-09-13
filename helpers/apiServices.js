import axios from 'axios';
import { getConfig } from '../config/config';

const SERVER_URL = getConfig().SERVER_URL;

const getQueryParams = queryParams =>
  Object.keys(queryParams).reduce(
    (acc, item, id) => acc + (id ? '&' : '') + item + '=' + queryParams[item],
    '?',
  );

export const getData = async (collection, queryParams) => {
  let params = '';
  if (queryParams) {
    params = getQueryParams(queryParams);
  }
  try {
    const { data } = await axios.get(`${SERVER_URL}${collection}${params}`);
    return data.data;
  } catch (error) {
    console.log('ERROR', error.message);
    return [];
  }
};
