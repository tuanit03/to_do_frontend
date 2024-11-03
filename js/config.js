window._config = {
    cognito: {
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
        region: process.env.REACT_APP_REGION
    },
    api: {
        url: process.env.REACT_APP_API_URL
    }
};
