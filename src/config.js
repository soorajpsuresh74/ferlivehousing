const { VITE_ENV, VITE_PROTOCOL, VITE_HOST, VITE_PORT, VITE_API_PATH } = import.meta.env;

const CONFIG = {
  env: VITE_ENV,
  protocol: VITE_PROTOCOL,
  host: VITE_HOST,
  port: VITE_PORT,
  apiBaseUrl: `${VITE_PROTOCOL}://${VITE_HOST}:${VITE_PORT}${VITE_API_PATH}`,
};

export default CONFIG;
