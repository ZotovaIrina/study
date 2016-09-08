describe('Unit testing no-special-char directive', function () {

    var $compile,
        $scope,
        element,
        form;

    beforeEach(module('app'));
    beforeEach(module('app.users'));
    beforeEach(module('templates'));

    beforeEach(inject(function ($templateCache) {

        $templateCache.put('./template/modules/dashboard/dashboard/template.html', '');
        $templateCache.put('./template/modules/navigation/template.html', '');
    }));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();

        element = angular.element(
            '<form name="createForm"><input type="text" id="sandbox" name="userName" ng-model="user.userName" no-special-char></form>'
        );
        $scope.user = { userName: '' };
        $compile(element)($scope);
        form = $scope.createForm;

    }));


    it('element exist', function () {
        expect(element).toBeDefined();
        expect($scope.user.userName).toBe('');
    });

    it('delete special character', function() {
        form.userName.$setViewValue('User 105$%()?{}#');
        $scope.$apply();
        expect($scope.user.userName).toEqual('User 105');
    });

});
