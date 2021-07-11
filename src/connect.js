const qs = require('querystring');

async function connect() {
  const { CALLBACK_URI, AUTHORIZE_URI, CLIENT_ID, RESPONSE_TYPE, SCOPE } = process.env;
  const params = {
    client_id: CLIENT_ID,
    redirect_uri: CALLBACK_URI,
    response_type: RESPONSE_TYPE,
    scope: SCOPE
  };
  const authorizationRedirectUri = `${AUTHORIZE_URI}?${qs.stringify(params)}`;

  return {
    statusCode: 301,
    headers: {
      Location: authorizationRedirectUri
    }
  };
}

module.exports = connect;