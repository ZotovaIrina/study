describe('UsersCtrl test users list', function () {

    beforeEach(module('ui.router'));
    beforeEach(module('app.services'));
    beforeEach(module('app'));
    beforeEach(module('app.users'));
    beforeEach(module('templates'));

    beforeEach(inject(function ($templateCache) {

        $templateCache.put('./template/modules/dashboard/dashboard/template.html', '');
        $templateCache.put('./template/modules/navigation/template.html', '');
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

    var id = 10;

    var UsersCtrl, scope, $httpBackend;


    beforeEach(inject(function ($controller, _$httpBackend_, $rootScope, Users) {

        $httpBackend = _$httpBackend_;
        $httpBackend
            .whenGET('http://localhost:2500/users')
            .respond(function () {
                return [200, userList, 'ok'];
            });

        scope = $rootScope.$new();
        UsersCtrl = $controller('UsersCtrl', {
            $scope: scope, Users: Users
        });


    }));

    it('Until users list will not be get loadData = false and users.length = 0', function () {
        expect(scope.loadData).toBe(false);
        expect(scope.users.length).toBe(0);
        $httpBackend.flush();
    });

    it('After get users list loadData = true and users contain correct data', function () {
        $httpBackend.flush();
        expect(scope.loadData).toBe(true);
        expect(scope.users[0].userName).toBe('User One');
        expect(scope.users[1].id).toBe(1);
        expect(scope.users[1].email).toBe('222@gmail.com');

    });

    it('delete user with success response', function () {
        $httpBackend
            .expectDELETE('http://localhost:2500/users/'+id)
            .respond(function () {
                return [200, '', {}, 'ok'];
            });
        spyOn(scope, 'delete').and.callThrough();
        scope.delete(id);
        expect(scope.delete).toHaveBeenCalled();
        $httpBackend.flush(0);
        expect(scope.loadData).toBe(false);
        $httpBackend.flush();
        expect(scope.loadData).toBe(true);
        expect(scope.users.length).toBe(2);
    });

    it('delete user with unsuccess response', function () {
        $httpBackend
            .expectDELETE('http://localhost:2500/users/'+id)
            .respond(function () {
                return [404, 'response body', {}, 'Not found'];
            });
        spyOn(scope, 'delete').and.callThrough();
        scope.delete(id);
        expect(scope.delete).toHaveBeenCalledWith(id);
        $httpBackend.flush();
        expect(scope.loadData).toBe(false);
        expect(scope.message).toBe('Error 404 Not found');
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});


