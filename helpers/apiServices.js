import axios from 'axios';

const SERVER_URL = process.env.SERVER_URL;

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
    const { data } = await axios.get(`${SERVER_URL}api/${collection}${params}`);
    return data.data;
  } catch (error) {
    console.log('ERROR', error.message);
    return [];
  }
};
