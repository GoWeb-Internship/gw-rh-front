export const getConfig = () => {
  const prod = process.env.NODE_ENV === 'production';

  return {
    SERVER_URL: prod ? process.env.SERVER_URL : 'http://localhost:1337/api/',
  };
};
