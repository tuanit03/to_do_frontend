window._config = {
    cognito: {
        userPoolId: process.env.REACT_APP_USER_POOL_ID || "default",
        userPoolClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID || "default",
        region: process.env.REACT_APP_REGION || "default"
    },
    api: {
        url: process.env.REACT_APP_API_URL || "default"
    }
};
