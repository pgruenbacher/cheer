'use strict';

describe('Controller: StickymenuCtrl', function () {

  // load the controller's module
  beforeEach(module('blocksquadApp'));

  var StickymenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StickymenuCtrl = $controller('StickymenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
