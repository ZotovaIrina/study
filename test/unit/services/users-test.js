describe('user service test', function () {

    beforeEach(module('app.services'));
    beforeEach(module('app'));
    beforeEach(module('templates'));

    beforeEach(inject(function ($templateCache) {

        $templateCache.put('./template/modules/dashboard/dashboard/template.html', '');
        $templateCache.put('./template/modules/navigation/template.html', '');
    }));

    var $httpBackend, injector;


    var UsersList = [
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
    // beforeEach(function() {
    //     inject(function ($injector) {
    //         injector = $injector;
    //         $httpBackend = $injector.get('$httpBackend');
    //         $httpBackend.when('GET', 'http://localhost:2500/users').respond(UsersList);
    //     });
    // });
    //
    //
    // afterEach(function () {
    //     $httpBackend.verifyNoOutstandingExpectation();
    //     $httpBackend.verifyNoOutstandingRequest();
    // });
    //
    // it('calls /user', function () {
    //     $httpBackend.expectGET('http://localhost:2500/users');
    //     $httpBackend.flush();
    // });
});