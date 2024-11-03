window._config = {
    cognito: {
        userPoolId: process.env.userPoolId,
        userPoolClientId: process.env.userPoolClientId,
        region: process.env.region
    },
    api: {
        url: process.env.url
    }
};
