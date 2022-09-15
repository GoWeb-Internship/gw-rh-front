export const getConfig = () => {
  // const prod = process.env.NODE_ENV === 'production';

  return {
    // SERVER_URL: process.env.SERVER_URL : 'http://localhost:1337',
    SERVER_URL: process.env.SERVER_URL,
    LOCAL_SERVER_URL: process.env.LOCAL_SERVER_URL,
  };
};
