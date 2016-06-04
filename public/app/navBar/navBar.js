'use strict';

angular.module('randomApp').controller('navBarCtrl', function($scope){        
        $scope.NavItems = [
        {name: 'URL Saver', route:'urlSaver'},
        {name: 'About', route:'about'},
        {name: 'Contact', route:'contact'}
        ]; 
});    
