var assert = require('chai').assert;

let citiesByCountriesToCities = require('../../../services/cities/citiesByCountriesToCities');

describe('citiesByCountriesToCities', function() {
  it('should reformat data correctly', function() {
    assert.deepEqual(
      citiesByCountriesToCities(
        [
          {
            id: 1,
            name: 'Country 1',
            urlName: 'country1',
            cities: [
              {
                id: 11,
                latitude: 111,
                longitude: 112,
                name: 'Country 1 City 1',
                urlName: 'country1city1'
              },
              {
                id: 12,
                latitude: 121,
                longitude: 122,
                name: 'Country 1 City 2',
                urlName: 'country1city2'
              },
            ]
          },
          {
            id: 2,
            name: 'Country 2',
            urlName: 'country2',
            cities: [
              {
                id: 21,
                latitude: 211,
                longitude: 212,
                name: 'Country 2 City 1',
                urlName: 'country2city1'
              },
              {
                id: 22,
                latitude: 221,
                longitude: 222,
                name: 'Country 2 City 2',
                urlName: 'country2city2'
              },
            ]
          }
        ]
      ),
      [
        {
          id: 11,
          latitude: 111,
          longitude: 112,
          name: 'Country 1 City 1',
          urlName: 'country1city1',
          country: {
            id: 1,
            name: 'Country 1',
            urlName: 'country1'
          }
        },
        {
          id: 12,
          latitude: 121,
          longitude: 122,
          name: 'Country 1 City 2',
          urlName: 'country1city2',
          country: {
            id: 1,
            name: 'Country 1',
            urlName: 'country1'
          }
        },
        {
          id: 21,
          latitude: 211,
          longitude: 212,
          name: 'Country 2 City 1',
          urlName: 'country2city1',
          country: {
            id: 2,
            name: 'Country 2',
            urlName: 'country2'
          }
        },
        {
          id: 22,
          latitude: 221,
          longitude: 222,
          name: 'Country 2 City 2',
          urlName: 'country2city2',
          country: {
            id: 2,
            name: 'Country 2',
            urlName: 'country2'
          }
        }
      ]
    );
  });
});
