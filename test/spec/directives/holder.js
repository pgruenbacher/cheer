'use strict';

describe('Directive: holder', function () {

  // load the directive's module
  beforeEach(module('blocksquadApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<holder></holder>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the holder directive');
  }));
});
