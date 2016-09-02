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

    // var $scope;
    // var $q;
    // var deferred;
    // beforeEach(inject(function($controller, _$rootScope_, _$q_, Users) {
    //     $q = _$q_;
    //     $scope = _$rootScope_.$new();
    //
    //     // We use the $q service to create a mock instance of defer
    //     deferred = _$q_.defer();
    //
    //     // Use a Jasmine Spy to return the deferred promise
    //     spyOn(Users, 'getAllUser').and.returnValue([{
    //                     "id": 0,
    //                     "userName": "User One",
    //                     "email": "111@gmail.com"
    //                 },
    //                     {
    //                         "id": 1,
    //                         "userName": "User Two",
    //                         "email": "222@gmail.com"
    //                     }]);
    //
    //     // Init the controller, passing our spy service instance
    //     $controller('UsersCtrl', {
    //         $scope: $scope,
    //         Users: Users
    //     });
    // }));

    var UsersCtrl, scope, $httpBackend, $q;

    beforeEach(inject(function ($controller, _$httpBackend_, _$q_, $rootScope, Users) {

        $httpBackend = _$httpBackend_;

        // react on that request
        $httpBackend.when('GET', 'http://localhost:2500/users').respond(
            [{
                "id": 0,
                "userName": "User One",
                "email": "111@gmail.com"
            },
                {
                    "id": 1,
                    "userName": "User Two",
                    "email": "222@gmail.com"
                }]
        );

        scope = $rootScope.$new();
        UsersCtrl = $controller('UsersCtrl', {
            $scope: scope, Users: Users
        });
        $httpBackend.flush();

    }));

    it('should have the correct data order in the users', function () {
        console.log(scope.users);
        expect(scope.users[0].userName).toBe('User One');
        expect(scope.users[1].id).toBe(1);
        expect(scope.users[1].email).toBe('222@gmail.com');
    });

    it('delete user', function () {
        console.log(scope.users);
        expect(scope.users.length).toBe(2);
        spyOn(scope, 'delete');
        scope.delete(3);
        console.log(scope.users);
        expect(scope.delete).toHaveBeenCalledWith(0);
        //expect(scope.users.length).toBe(1);
    });

});
