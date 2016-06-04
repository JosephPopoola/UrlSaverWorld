"use strict";

angular.module('randomApp').factory('urlResource',['FBMSG','$firebaseArray',function(FBMSG,$firebaseArray){

  var ref = new Firebase(FBMSG);
  var urls = $firebaseArray(ref);
  var urlResource = {};

  urlResource.getAllUrls = function(){
    return urls;
  }

  urlResource.addUrl = function(url){
    return urls.$add(url);
  }

  urlResource.removeUrl = function(url){
    return urls.$remove(url);
  }

return urlResource;
}]);
