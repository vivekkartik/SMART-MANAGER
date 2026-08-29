export const config = {
  MONGO_URI: process.env.REACT_APP_MONGO_URI,
  JWT_SECRET: process.env.REACT_APP_JWT_SECRET,
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:1000',
};

export default config;
