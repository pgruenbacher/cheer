'use strict';

describe('Service: demo', function () {

  // load the service's module
  beforeEach(module('blocksquadApp'));

  // instantiate service
  var demo;
  beforeEach(inject(function (_demo_) {
    demo = _demo_;
  }));

  it('should do something', function () {
    expect(!!demo).toBe(true);
  });

});
