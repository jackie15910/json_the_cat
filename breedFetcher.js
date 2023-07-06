const request = require('request');
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
let catName = process.argv.slice(2);

request(url + catName, (error, response, data) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  const parsedData = JSON.parse(data);
  if (parsedData[0]) {
    //console.log(typeof data);
    console.log(parsedData[0]);
    //console.log(typeof parsedData);
    //console.log(Object.keys(parsedData[0]));
  } else {
    console.log("Cat name not found");
  }
});