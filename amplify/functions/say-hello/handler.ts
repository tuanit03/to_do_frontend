import type { Handler } from 'aws-lambda';
import { env } from '$amplify/env/say-hello'; // the import is '$amplify/env/<function-name>'

export const handler: Handler = async (event, context) => {
  // your function code goes here
  return ${env.REACT_APP_USER_POOL_ID}, ${env.REACT_APP_USER_POOL_CLIENT_ID}, ${env.REACT_APP_REGION}, ${env.REACT_APP_API_URL};
};