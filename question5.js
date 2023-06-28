const request = require('request');

function getGoogleHomePage() {
  return new Promise((resolve, reject) => {
    request('http://www.google.com', function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

getGoogleHomePage()
  .then(result => {
    console.log('RESULT==>', result);
  })
  .catch(error => {
    console.error('ERROR:', error);
  });
