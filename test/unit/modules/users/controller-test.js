describe('UsersCtrl test', function () {

    beforeEach(module('ui.router'));
    beforeEach(module('app.services'));
    beforeEach(module('app'));
    beforeEach(module('app.users'));
    beforeEach(module('templates'));

    beforeEach(inject(function ($templateCache) {

        $templateCache.put('./template/modules/dashboard/dashboard/template.html', '');
        $templateCache.put('./template/modules/navigation/template.html', '');
    }));

    var userList = [{
        "id": 0,
        "userName": "User One",
        "email": "111@gmail.com"
    },
        {
            "id": 1,
            "userName": "User Two",
            "email": "222@gmail.com"
        }];

    var UsersCtrl, scope, $httpBackend, $q;


    beforeEach(inject(function ($controller, _$httpBackend_, _$q_, $rootScope, Users) {

        $httpBackend = _$httpBackend_;
        // $httpBackend
        //     .whenDELETE('http://localhost:2500/users/10')
        //     .respond(function () {
        //         return [200, 'ok'];
        //     });
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

    // beforeEach(function (done) {
    //     window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    //     setTimeout(function () {
    //         console.log('inside timeout');
    //         done();
    //     }, 500);
    // });


    // it('get Users', function(done) {
    //     inject(function(Users) {
    //         Users.getAllUser()
    //             .then(function(res) {
    //
    //                 $httpBackend.flush();
    //                 console.log('scope.users', res);
    //                 expect(scope.users.length).toBe(0);
    //             });
    //         done();
    //     });
    //
    // });

    it('get list of users', function () {
        $httpBackend
            .whenGET('http://localhost:2500/users')
            .respond(function () {
                return [200, userList, 'ok'];
            });
        console.log('scope.users', scope.users);
        expect(scope.loadData).toBe(false);
        expect(scope.users.length).toBe(0);
        $httpBackend.flush();
        console.log('scope.users', scope.users);
        expect(scope.loadData).toBe(true);
        expect(scope.users[0].userName).toBe('User One');
        expect(scope.users[1].id).toBe(1);
        expect(scope.users[1].email).toBe('222@gmail.com');

    });


    it('delete user success', function () {
        console.log('scope.users', scope.users);
        $httpBackend
            .expectGET('http://localhost:2500/users')
            .respond(function () {
                return [200, userList, {}, 'ok'];
            });
        $httpBackend
            .expectDELETE('http://localhost:2500/users/10')
            .respond(function () {
                return [200, '', {}, 'ok'];
            });

        expect(scope.users.length).toBe(0);
        spyOn(scope, 'delete').and.callThrough();
        scope.delete(10);
        expect(scope.delete).toHaveBeenCalled();
        $httpBackend.flush(0);
        console.log('$httpBackend.flush(0);');
        expect(scope.loadData).toBe(false);
        console.log('not user get');
        $httpBackend.flush();
        expect(scope.loadData).toBe(true);
        expect(scope.users.length).toBe(2);
        console.log('scope.users', scope.users);
    });

    // it('delete user unsuccess', function () {
    //     $httpBackend
    //         .expect('DELETE', /\/users\/(.+)/, undefined, undefined, ['id'])
    //         .respond(function() {
    //             return [404, 'response body', {}, 'Not found'];
    //         });
    //     spyOn(scope, 'delete').and.callThrough();
    //     scope.delete({id: 5});
    //     expect(scope.delete).toHaveBeenCalled();
    //     $httpBackend.flush();
    //     expect(scope.loadData).toBe(false);
    //     expect(scope.message).toBe('Error 404 Not found');
    // });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


});
