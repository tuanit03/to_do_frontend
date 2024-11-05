window._config = {
  cognito: {
    userPoolId: REACT_APP_USER_POOL_ID || "default",
    userPoolClientId: REACT_APP_USER_POOL_CLIENT_ID || "default",
    region: REACT_APP_REGION || "default"
  },
  api: {
    url: REACT_APP_API_URL || "default"
  }
};
