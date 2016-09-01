describe('UsersCtrl', function () {

    beforeEach(module('ui.router'));
    beforeEach(module('app.services'));
    beforeEach(module('app'));
    beforeEach(module('app.users'));

    var UsersCtrl, scope, $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, _$httpBackend_, $rootScope, Users) {

        // place here mocked dependencies
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('./template/modules/dashboard/dashboard/template.html');
        $httpBackend.expectGET('http://localhost:2500/users').respond([
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
        ]);

        scope = $rootScope.$new();
        UsersCtrl = $controller('UsersCtrl', {
            $scope: scope, Users: Users
        });
        $httpBackend.flush();

    }));

    // it('should create "users" with 2 user', function(){
    //     expect(scope.users).toBeDefined();
    //     expect(scope.users.length).toBe(2);
    // });

    it('should have the correct data order in the users', function() {

        expect(scope.users[0].userName).toBe('User One');
        expect(scope.users[1].id).toBe(1);
        expect(scope.users[1].email).toBe('222@gmail.com');
    });

});
