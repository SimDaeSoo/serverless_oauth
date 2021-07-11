const qs = require('querystring');
const axios = require('axios');

async function callback(code) {
  const { REDIRECT_URI, CALLBACK_URI, TOKEN_URI, CLIENT_ID, CLIENT_SECRET, GRANT_TYPE } = process.env;
  const params = {
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: GRANT_TYPE,
    redirect_uri: CALLBACK_URI
  };
  const tokenResponse = await axios.post(TOKEN_URI, params);
  const { access_token } = tokenResponse.data;
  const querystring = qs.stringify({ access_token });

  return {
    statusCode: 301,
    headers: {
      Location: `${REDIRECT_URI}?${querystring}`
    }
  };
}

module.exports = callback;