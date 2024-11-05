import { defineFunction } from '@aws-amplify/backend';

export const sayHello = defineFunction({
  environment: {
    NAME: "World",
    REACT_APP_USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    REACT_APP_USER_POOL_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    REACT_APP_REGION: process.env.REACT_APP_REGION,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL
  },
  // optionally specify a name for the Function (defaults to directory name)
  name: 'say-hello',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts'
});
