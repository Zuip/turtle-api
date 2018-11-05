module.exports = function(citiesByCountries) {

  let cities = [];

  citiesByCountries.forEach(
    country => country.cities.forEach(
      city => {

        city.country = {
          id: country.id,
          name: country.name,
          urlName: country.urlName
        };

        cities.push(city);
      }
    )
  );

  return cities;
};
