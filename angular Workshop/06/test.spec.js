// angular / karma / Jasmine

describe('tests', function() {
  beforeEach(module('app'));

  describe('MainCtroller tests', function() {
    var mainCtrlScope;
    beforeEach(inject(function($controller, $rootScope) {
      mainCtrlScope = $rootScope.$new();

      $controller('MainCtrl', {
        $scope : mainCtrlScope
      });

    }));

    it("should return the correct length", function() {
      expect(mainCtrlScope.listLength()).toBe(3);
    });

  });

  it("should be ok", function() {
    expect(true).toBe(true);
  })
});