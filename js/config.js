window._config = {
    cognito: {
        userPoolId: process.env.USER_POOL_ID,
        userPoolClientId: process.env.USER_POOL_CLIENT_ID,
        region: process.env.REGION
    },
    api: {
        url: process.env.API_URL
    }
};
