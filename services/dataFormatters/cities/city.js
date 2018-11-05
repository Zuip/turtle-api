module.exports = function(city) {
  return {
    country: {
      name: city.country.name,
      urlName: city.country.urlName
    },
    language: city.language,
    latitude: city.latitude,
    longitude: city.longitude,
    name: city.name,
    urlName: city.urlName
  };
};
