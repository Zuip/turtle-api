module.exports = function(citiesByCountries) {

  let cities = [];

  citiesByCountries.forEach(
    country => country.cities.forEach(
      city => {

        city.country = {
          name: country.name,
          urlName: country.urlName
        };

        cities.push(city);
      }
    )
  );

  return cities;
};
