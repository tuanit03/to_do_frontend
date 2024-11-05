import { defineFunction } from '@aws-amplify/backend';

export const sayHello = defineFunction({
  environment: {
    NAME: "World",
    REACT_APP_USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID || "default_user_pool_id",
    REACT_APP_USER_POOL_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID || "default_client_id",
    REACT_APP_REGION: process.env.REACT_APP_REGION || "default_region",
    REACT_APP_API_URL: process.env.REACT_APP_API_URL || "default_api_url",
  },
  name: 'say-hello',
  entry: './handler.ts'
});

