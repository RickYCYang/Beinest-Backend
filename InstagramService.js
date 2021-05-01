const axios = require('axios');
const domain = 'https://graph.facebook.com/v10.0';

const refreshAccessToken = async() => {
    let accessToken;
    await axios.get(`${domain}/oauth/access_token?grant_type=fb_exchange_token&client_id=139544868138435&client_secret=ebe76f1a48176c306b848f045d9369ac&fb_exchange_token=EAABZB6lJLrcMBANdTvYzZBnd6plyXaKSSmoJ8fRu3rZCpQUeFjWLxJgMtFe7ZAjyAwkh3wxqVNmQBw6oiKDp2UrFcH67fWDSCisGlKo8CoxIi9jqQzu3ScuPVhyW2jq59TynlKiQrl3YZBjdVARDPoDTKnSFNDErXM1ThFZCfuXds7H4svgQrxXNNikBpJZCzZAhe804PGIxP4bpFu14PUBYTAHBNjoGTBCsX5twMALFzAZDZD`)
    .then(response => {
      accessToken = response.data.access_token;
      console.log('get accessToken', accessToken); 
    });
    return accessToken;
}

module.exports = {
    refreshAccessToken: refreshAccessToken                   
};