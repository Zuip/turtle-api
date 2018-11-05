var assert = require('chai').assert;

let countryDataFormatter = require('../../../../services/dataFormatters/cities/country');

describe('cityDataFormatter', function() {
  it('should reformat data correctly', function() {
    assert.deepEqual(
      countryDataFormatter(
        {
          id: 1,
          language: 'fi',
          name: 'Country',
          urlName: 'country'
        }
      ),
      {
        language: 'fi',
        name: 'Country',
        urlName: 'country'
      }
    );
  });
});
