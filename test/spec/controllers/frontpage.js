'use strict';

describe('Controller: FrontpageCtrl', function () {

  // load the controller's module
  beforeEach(module('blocksquadApp'));

  var FrontpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FrontpageCtrl = $controller('FrontpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
