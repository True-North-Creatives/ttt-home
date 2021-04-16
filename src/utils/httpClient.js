import axios from 'axios';

export const AUTH_ENDPOINT = 'AUTH_ENDPOINT';

export const END_POINTS = {
  local: {
    AUTH_ENDPOINT: 'http://localhost:3010'
  },
  dev: {
    AUTH_ENDPOINT: 'auth-service.default.svc.cluster.local'
  }
}

export default axios({
  method: 'get'
})