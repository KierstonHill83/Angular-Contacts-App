angular.module('myApp', []);


var firstControllerFunction = function($scope) {

  var harry = {
    'name': 'Harry Potter',
    'email': 'harry@hogwarts.com',
    'phone': '(232) 383-5647'
  };
  var edward = {
    'name': 'Edward Scissorhands',
    'email': 'ed@hotmail.com',
    'phone': '(413) 987-5739'
  };
  var willy = {
    'name': 'Willy Wonka',
    'email': 'willy@gmail.com',
    'phone': '(221) 938-4525'
  };
  var arya = {
    'name': 'Arya Stark',
    'email': 'arya@yahoo.com',
    'phone': '(165) 437-0826'
  };

  $scope.people = [harry, edward, willy, arya];

  $scope.addContact = function() {
    var contact = {
      'name': $scope.name,
      'email': $scope.email,
      'phone': $scope.phone,
    };

  $scope.people.push(contact);
  };

};


angular.module('myApp').controller('firstController', ['$scope', firstControllerFunction]);
