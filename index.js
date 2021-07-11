const connect = require('./src/connect');
const callback = require('./src/callback');

exports.handler = async (event) => {
  try {
    const { pathParameters, queryStringParameters } = event || {};
    const { path } = pathParameters || {};
    const { code } = queryStringParameters || {};

    switch (path) {
      case 'connect': {
        return await connect();
      }
      case 'callback': {
        return await callback(code);
      }
      default: {
        throw 'is not vaild path';
      }
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e)
    }
  }
};
