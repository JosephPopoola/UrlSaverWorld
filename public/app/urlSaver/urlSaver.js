'use strict';

angular.module('randomApp').controller('urlSaverCtrl',["_","urlResource",function(_,urlResource){
    var vm = this;
    vm.currentUrl = {url: ''};
    vm.listoUrls = [];
    var error = "Error :";
    var success = "Success :";

    var init = function(){
        urlResource.getAllUrls().$loaded(function(response){
          vm.listoUrls = response;
        });
    }

    vm.save = function(currentUrl){

        var x =_.findWhere(vm.listoUrls, {url:currentUrl.url});

        if(currentUrl.url == ''){
            toastr.error('Must enter a URL',error);
        }
        else if(_.findWhere(vm.listoUrls, {url:currentUrl.url}) == undefined){

          urlResource.addUrl(currentUrl).$loaded(function(response) {
            toastr.success('Success',success);
          });

            //  var temp = {url: currentUrl.url}
            //  vm.listoUrls.push(temp);
        }
        else{
            toastr.error('Duplicate url',error);
        }
    };

   vm.delete = function(currentUrl) {
       var toDelete =_.findWhere(vm.listoUrls, {url:currentUrl.url});
       var indexToDelete = vm.listoUrls.indexOf(toDelete);
        if(indexToDelete != -1) {
            vm.listoUrls.splice(indexToDelete, 1);
            toastr.success('URL has been deleted',success);
        }
   };

   vm.copy = function(currentUrl){
      var targetId = currentUrl.target.parentElement.firstElementChild.id;
      debugger;
      var urlLink = document.querySelector('#'+targetId);
      var range = document.createRange();
      range.selectNode(urlLink);
      window.getSelection().addRange(range);

      var successful = document.execCommand('copy');
      toastr.success('URL has been copied to your clipboard',success);
   }

}]);
