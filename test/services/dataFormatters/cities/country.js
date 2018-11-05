var assert = require('chai').assert;

let countryDataFormatter = require('../../../../services/dataFormatters/cities/country');

describe('cityDataFormatter', function() {
  it('should reformat data correctly', function() {
    assert.deepEqual(
      countryDataFormatter(
        {
          id: 1,
          name: 'Country',
          urlName: 'country'
        }
      ),
      {
        name: 'Country',
        urlName: 'country'
      }
    );
  });
});
