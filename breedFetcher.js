const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName
  request(url, (error, response, data) => {
    if (error) {
      return callback(error, null);
    }
    const parsedData = JSON.parse(data);
    const breedData = parsedData[0];
    if (breedData) {
      return callback(null, breedData.description);
    }
    else {
      return callback("Breed not found.", null);
  }
  })
};
module.exports = { fetchBreedDescription };