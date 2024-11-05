window._config = {
  cognito: {
    userPoolId: window._env_.REACT_APP_USER_POOL_ID || "default",
    userPoolClientId: window._env_.REACT_APP_USER_POOL_CLIENT_ID || "default",
    region: window._env_.REACT_APP_REGION || "default"
  },
  api: {
    url: window._env_.REACT_APP_API_URL || "default"
  }
};
