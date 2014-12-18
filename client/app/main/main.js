'use strict';

angular.module('mmtravelApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
  
  
  $(document).ready(function () {
    $("input#submit2").click(function(){
        $.ajax({
            type: "POST",
            url: "process.php", //process to mail
            data: $('form.contact').serialize(),
            success: function(msg){
            	    alert('it worked!')
            },
            error: function(){
                alert("failure");
            }
        });
    });
});
