'use strict';

/**
 * @ngdoc overview
 * @name randomApp
 * @description
 * # randomApp
 *
 * Main module of the application.
 */
angular
  .module('randomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'underscore',
    'firebase'
  ])
  .constant('FBMSG','https://project-858637147366900427.firebaseio.com/Urls')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact',{
          templateUrl: 'contact/contact.html',
          controller: 'contactCtrl',
          controllerAs: 'contact'
      })
     .when('/urlSaver',{
          templateUrl: 'urlSaver/urlSaver.html',
          controller: 'urlSaverCtrl',
          controllerAs: 'urlSaver'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
