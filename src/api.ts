const API = {
  accessToken: '',
  expiresAt: '',

  get credentials() {
    return {
      accessToken: API.accessToken,
      expiresAt: API.expiresAt,
    }
  },

  set credentials({ accessToken, expiresAt }) {
    API.accessToken = accessToken
    API.expiresAt = expiresAt
  },
}

export default API
