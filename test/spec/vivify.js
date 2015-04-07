var $ = require('air')
  , expect = require('chai').expect;

describe('Vivify:', function() {

  $.plugin([
    require('class'),
    require('vivify')
  ]);

  it('should use default options', function(done) {
    done();
  });
});
