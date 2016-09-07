describe('CreateCtrl test create user', function () {

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

    var userList = [
        {
            "id": 0,
            "userName": "User One",
            "email": "111@gmail.com"
        },
        {
            "id": 1,
            "userName": "User Two",
            "email": "222@gmail.com"
        }
    ];

    var CreateCtrl, scope, $httpBackend, state;


    beforeEach(inject(function ($controller, $rootScope, Users, $state) {

        state = $state;
        state.expectTransitionTo('users');
        scope = $rootScope.$new();
        CreateCtrl = $controller('CreateCtrl', {
            $scope: scope, Users: Users
        });
    }));

    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend
            .whenGET('http://localhost:2500/users')
            .respond(function () {
                return [200, userList, 'ok'];
            });
        $httpBackend
            .whenPOST('http://localhost:2500/users', function (data) {
                var getData = angular.fromJson(data);
                expect(data).toBeDefined();
                expect(getData.userName).toBeDefined();
                expect(getData.email).toBeDefined();
                return true;
            }, function (headers) {
                expect(headers['Content-Type']).toBe('application/json');
                // MUST return boolean
                return headers['Content-Type'] ===  'application/json';
            })
            .respond(function () {
                return [200, {}, 'ok'];
            });
    }));

    it('New user.id should be 2', function() {
        $httpBackend.flush();
        expect(scope.user.id).toBe(2);
    });

    it('POST new user and change state', function () {
        scope.user = {
            userName: 'Test User',
            email: 'test@email'
        };
        spyOn(scope, 'create').and.callThrough();
        scope.create();
        expect(scope.create).toHaveBeenCalled();
        $httpBackend.flush();
        expect(state.current.name).toBe('users');
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});