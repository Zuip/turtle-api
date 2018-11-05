var assert = require('chai').assert;

let cityDataFormatter = require('../../../../services/dataFormatters/cities/city');

describe('cityDataFormatter', function() {
  it('should reformat data correctly', function() {
    assert.deepEqual(
      cityDataFormatter(
        {
          id: 11,
          latitude: 111,
          longitude: 112,
          name: 'City',
          urlName: 'city',
          country: {
            id: 1,
            name: 'Country',
            urlName: 'country'
          }
        }
      ),
      {
        latitude: 111,
        longitude: 112,
        name: 'City',
        urlName: 'city',
        country: {
          name: 'Country',
          urlName: 'country'
        }
      }
    );
  });
});
