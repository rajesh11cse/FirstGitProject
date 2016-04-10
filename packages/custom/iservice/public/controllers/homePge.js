'use strict';

/* jshint -W098 */
angular.module('mean.iservice').controller('HomePageController', ['$scope', '$http', '$upload', 'MeanUser', 'Global', 'Iservice',
  function($scope, $http, $upload, MeanUser, Global, Iservice) {
    $scope.global = Global;
    $scope.package = {
      name: 'iservice'
    };

    $scope.authenticated = MeanUser.loggedin;

	$scope.fileSelectForProduct = function($files) {
		console.log("rched");
		if($files != undefined){
			var files = [];
            $scope.files = $files;
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: '/api/uploadProduct',
                    headers: {
                        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    },
                    data: {
                    },
                    file: file
                }).success(function(data, status, headers) {
                    if (data) {
                      console.log(data); 
                    }
                });
            }
		}else{
			alert("Please select file")
		}
    };


    $scope.fileSelectForBrand = function($files) {
        console.log("rched");
        if($files != undefined){
            var files = [];
            $scope.files = $files;
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: '/api/uploadBrand',
                    headers: {
                        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    },
                    data: {
                    },
                    file: file
                }).success(function(data, status, headers) {
                    if (data) {
                      console.log(data); 
                    }
                });
            }
        }else{
            alert("Please select file")
        }
    };


    $scope.fileSelectForModel = function($files) {
        console.log("rched");
        if($files != undefined){
            var files = [];
            $scope.files = $files;
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: '/api/uploadModel',
                    headers: {
                        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    },
                    data: {
                    },
                    file: file
                }).success(function(data, status, headers) {
                    if (data) {
                      console.log(data); 
                    }
                });
            }
        }else{
            alert("Please select file")
        }
    };


    $scope.fileSelectForPinCode1 = function($files) {
        console.log("rched");
        if($files != undefined){
            var files = [];
            $scope.files = $files;
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: '/api/uploadPinCode',
                    headers: {
                        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    },
                    data: {
                    },
                    timeout: 300000,
                    file: file
                }).success(function(data, status, headers) {
                    if (data) {
                      console.log(data); 
                    }
                });
            }
        }else{
            alert("Please select file")
        }
    };

    $scope.fileSelectForPinCode = function() {
       console.log("rched");
        $http({
              url: '/api/uploadPinCode',
              method: 'POST', 
            data:{}
          }).success(function (bcresponse) {
            console.log(bcresponse);
        });
    }


     $scope.fileSelectForImage = function($files) {
        console.log("rched");
        if($files != undefined){
            var files = [];
              $scope.files = $files;
              //$files: an array of files selected, each file has name, size, and type.
              for (var i = 0; i < $files.length; i++) {
                  var file = $files[i];
                  $scope.upload = $upload.upload({
                    
                      url: '/api/tinImageUpload',
                      headers: {
                          'Content-Type': 'multipart/form-data'
                      },
                      data: {
                        dealer : "56a6255ca25cec62470cf15a",
                        user : "56a6255ba25cec62470cf159"
                      },
                      file: file
                  }).success(function(data, status, headers) {
                      if (data) {
                        $scope.image_url = data;
                        console.log("imghh");
                        console.log($scope.image_url); 
                      }
                  }).error(function(err){
                    console.log("errorfvf");
                    console.log(err);
                  });
              }
        }else{
            alert("Please select file")
        }
    };

  }
]);
