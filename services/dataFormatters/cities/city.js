module.exports = function(city) {
  return {
    country: {
      name: city.country.name,
      urlName: city.country.urlName
    },
    latitude: city.latitude,
    longitude: city.longitude,
    name: city.name,
    urlName: city.urlName
  };
};
