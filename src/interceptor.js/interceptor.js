import Request from 'axios';

const ip = process.env.REACT_APP_RANDOM_IP;
// const ip =process.env.REACT_APP_IP; // uncomment when using moweb-node server

export const makePublicRequest = (method, api, data) =>
  Request[method](ip + 'api'+api, data).then(r => r);