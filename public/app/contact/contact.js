'use strict';

angular.module('randomApp')
    .controller('contactCtrl',function($scope,_) {
    var vm = this;
    
    var contactRequests = [];
    
    var initContact = function(){
            vm.contact = {
            name:'',
            email:'',
            queryType:'',
            message:''
        };
    };   
    initContact();
 
    vm.queryTypeOptions = [
        {name:'Yes',value:0},
        {name:'No',value:1},
        {name:'Other',value:2},
        ];
    
    vm.submit = function(value) {
        if(_.contains(value,'')){
            toastr.error('Please fill out each field','Error : ')
        }else{    
        var tempContact = {
            name:value.name,
            email:value.email,
            queryType: value.queryType,
            message:value.message
        }        
        contactRequests.push(tempContact); 
        initContact();   
        toastr.success('Thank you, your message has been submitted','Success : ');
        }
    };
    
    });