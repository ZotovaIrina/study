describe('UpdateCtrl test update user', function () {

    beforeEach(module('ui.router'));
    beforeEach(module('app.services'));
    beforeEach(module('app'));
    beforeEach(module('app.users'));
    beforeEach(module('templates'));
    beforeEach(module('stateMock'));

    beforeEach(inject(function ($templateCache) {

        $templateCache.put('./template/modules/dashboard/dashboard/template.html', '');
        $templateCache.put('./template/modules/navigation/template.html', '');
        $templateCache.put('./template/modules/users/users/template.html', '');


    }));

    var user = {
        "id": 10,
        "userName": "User One",
        "email": "111@gmail.com"
    };

    var UpdateCtrl, scope, $httpBackend, state, stateparams;

    beforeEach(inject(function ($controller, $rootScope, Users, $state) {
        state = $state;
        state.expectTransitionTo('users');
        stateparams = {id: 10};
        scope = $rootScope.$new();

        UpdateCtrl = $controller('UpdateCtrl', {
            $scope: scope, Users: Users, $stateParams: stateparams
        });
    }));

    beforeEach(inject(function (_$httpBackend_) {

        $httpBackend = _$httpBackend_;
        $httpBackend
            .whenGET('http://localhost:2500/users/' + stateparams.id)
            .respond(function () {
                return [200, user, 'ok'];
            });
        $httpBackend
            .whenPUT('http://localhost:2500/users/' + stateparams.id, function (data) {
                var getData = angular.fromJson(data);
                expect(data).toBeDefined();
                expect(getData.userName).toBeDefined();
                expect(getData.email).toBeDefined();
                return true;
            }, function (headers) {
                expect(headers['Content-Type']).toBe('application/json');
                // MUST return boolean
                return headers['Content-Type'] === 'application/json';
            })
            .respond(function () {
                return [200, {}, 'ok'];
            });
    }));

    it('Get user data from server', function () {
        $httpBackend.flush();
        expect(scope.user.id).toBe(10);
        expect(scope.user.userName).toBe('User One');
    });

    it('PUT correct data and change state', function () {
        scope.user = {
            userName: 'Test User',
            email: 'test@email'
        };
        spyOn(scope, 'update').and.callThrough();
        scope.update();
        expect(scope.update).toHaveBeenCalled();
        $httpBackend.flush();
        expect(state.current.name).toBe('users');
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});