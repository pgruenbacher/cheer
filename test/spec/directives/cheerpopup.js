'use strict';

describe('Directive: cheerPopup', function () {

  // load the directive's module
  beforeEach(module('blocksquadApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cheer-popup></cheer-popup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cheerPopup directive');
  }));
});
