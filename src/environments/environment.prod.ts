export const environment = {
  production: true,
  apiBaseUrl: 'http://localhost:3010',
  routes: {
    auth: '/auth/local',
    user: '/users',
  },
  keys: {
    token: 'userToken',
    user: 'userInfo',
  }
};
