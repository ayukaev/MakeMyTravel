'use strict';

angular.module('mmtravelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      }, 'designers', {
        url: '/profile_kate',
        templateUrl: 'app/profile_kate/profile.html',
        controller: 'ProfileKate'
      });
  });