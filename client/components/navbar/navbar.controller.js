'use strict';

angular.module('mmtravelApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'About',
      'link': '/',
    },{
      'parent' : '/',
      'title': 'How it works',
      'link': '#portfolio'
    },{
      'parent' : '/',
      'title': 'Our Designers',
      'link': '#team'
    },{
      'parent' : '/',
      'title': 'Contact',
      'link': '#contact'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });