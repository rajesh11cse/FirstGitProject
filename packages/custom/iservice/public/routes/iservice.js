'use strict';

angular.module('mean.iservice').config(['$stateProvider',
  function($stateProvider) {

  	var checkSuperAdmin = function($q, $rootScope, $timeout, $http, $location) {
     var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/api/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') {
          console.log("iservice-checkSuperAdmin");
          localStorage.setItem("user", JSON.stringify(user));
          if(user.type == "superadmin"){
            $rootScope.$emit('loggedin');
            $timeout(deferred.resolve);
          }else{
            $timeout(deferred.reject);
            $location.url('/homePage');
          }
        // Not Authenticated
        }else {
          $timeout(deferred.reject);
          $location.url('/homePage');
        }
      });

      return deferred.promise;
    };

    var checkAdmin = function($q, $rootScope, $timeout, $http, $location) {
     var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/api/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') {
          console.log("iservice-checkAdmin");
          localStorage.setItem("user", JSON.stringify(user));
          if(user.type == "admin" || user.type == "superadmin"){
            $rootScope.$emit('loggedin');
            $timeout(deferred.resolve);
          }else{
            $timeout(deferred.reject);
            $location.url('/homePage');
          }
        // Not Authenticated
        }else {
          $timeout(deferred.reject);
          $location.url('/homePage');
        }
      });

      return deferred.promise;
    };


    var checkCallCenter = function($q, $rootScope, $timeout, $http, $location) {
     var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/api/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') {
          console.log("iservice-checkCallCenter");
          localStorage.setItem("user", JSON.stringify(user));
          if(user.type == "callcenter" || user.type == "superadmin"){
            $rootScope.$emit('loggedin');
            $timeout(deferred.resolve);
          }else{
            $timeout(deferred.reject);
            $location.url('/homePage');
          }
        // Not Authenticated
        }else {
          $timeout(deferred.reject);
          $location.url('/homePage');
        }
      });

      return deferred.promise;
    };

    var checkServiceCenter = function($q, $rootScope, $timeout, $http, $location) {
     var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/api/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') {
          console.log("iservice-checkServiceCenter");
          localStorage.setItem("user", JSON.stringify(user));
          if(user.type == "servicecenter" || user.type == "superadmin"){
            $rootScope.$emit('loggedin');
            $timeout(deferred.resolve);
          }else{
            $timeout(deferred.reject);
            $location.url('/homePage');
          }
        // Not Authenticated
        }else {
          $timeout(deferred.reject);
          $location.url('/homePage');
        }
      });

      return deferred.promise;
    };


    var checkLoggedin = function($q, $rootScope, $timeout, $http, $location) {
     var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/api/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') {
          console.log("iservice-checkLoggedin");
          localStorage.setItem("user", JSON.stringify(user));
          $rootScope.$emit('loggedin');
          $timeout(deferred.resolve);

        // Not Authenticated
        }else {
          $timeout(deferred.reject);
          $location.url('/homePage');
        }
      });

      return deferred.promise;
    };

    var checkLoggedOut = function($q, $timeout, $http, $location) {
       // Check if the user is not connected
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/api/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') {
          console.log("iservice-checkLoggedOut");
          console.log(user);
          localStorage.setItem("user", JSON.stringify(user));
          if(user.type == "superadmin"){
            $timeout(deferred.reject);
            $location.url('/dashBoard');
          }else if(user.type == "admin"){
            $timeout(deferred.reject);
            $location.url('/adminDashBoard');
          }else if(user.type == "callcenter"){
            $timeout(deferred.reject);
            $location.url('/callCenterDashBoard');
          }else{
            $timeout(deferred.reject);
            $location.url('/serviceCenterDashBoard');
          }
        }
        // Not Authenticated
        else $timeout(deferred.resolve);
      });

      return deferred.promise;
    };


    $stateProvider.state('iservice example page', {
      url: '/iservice/example',
      templateUrl: 'iservice/views/index.html'
    }).state('homePage', {
      url: '/homePage',
      templateUrl: 'iservice/views/homePage.html',
      resolve :{checkLoggedOut: checkLoggedOut}
    }).state('importData', {
      url: '/importData',
      templateUrl: 'iservice/views/importData.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('dashBoard', {
      url: '/dashBoard',
      templateUrl: 'iservice/views/dashBoard.html',
      resolve :{checkSuperAdmin: checkSuperAdmin}
    }).state('adminDashBoard', {
      url: '/adminDashBoard',
      templateUrl: 'iservice/views/adminDashBoard.html',
      resolve :{checkAdmin: checkAdmin}
    }).state('customers', {
      url: '/customers',
      templateUrl: 'iservice/views/customers.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('dealers', {
      url: '/dealers',
      templateUrl: 'iservice/views/dealers.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('superAdminUserList', {
      url: '/superAdminUserList',
      templateUrl: 'iservice/views/superAdminUserList.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('adminUserList', {
      url: '/adminUserList',
      templateUrl: 'iservice/views/adminUserList.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('customerComplaints', {
      url: '/customerComplaints',
      templateUrl: 'iservice/views/customerComplaints.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('stockComplaints', {
      url: '/stockComplaints',
      templateUrl: 'iservice/views/stockComplaints.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('demo', {
      url: '/demo',
      templateUrl: 'iservice/views/demo.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('registerSales', {
      url: '/registerSales',
      templateUrl: 'iservice/views/registerSales.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('addProduct', {
      url: '/addProduct',
      templateUrl: 'iservice/views/addProduct.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('addBrand', {
      url: '/addBrand',
      templateUrl: 'iservice/views/addBrand.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('addCategory', {
      url: '/addCategory',
      templateUrl: 'iservice/views/addCategory.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('addSubCategory', {
      url: '/addSubCategory',
      templateUrl: 'iservice/views/addSubCategory.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('updateProduct', {
      url: '/updateProduct',
      templateUrl: 'iservice/views/updateProduct.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('updateCategory', {
      url: '/updateCategory',
      templateUrl: 'iservice/views/updateCategory.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('getProduct', {
      url: '/getProduct',
      templateUrl: 'iservice/views/productlist.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('getBrand', {
      url: '/getBrand',
      templateUrl: 'iservice/views/brandList.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('form', {
      url: '/form',
      templateUrl: 'iservice/views/form.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('addProductType', {
      url: '/addProductType',
      templateUrl: 'iservice/views/productType.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('addServiceType', {
      url: '/addServiceType',
      templateUrl: 'iservice/views/serviceType.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('manageProduct', {
      url: '/manageProduct',
      templateUrl: 'iservice/views/manageProduct.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('manageCategory', {
      url: '/manageCategory',
      templateUrl: 'iservice/views/manageCategory.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('manageSubCategory', {
      url: '/manageSubCategory',
      templateUrl: 'iservice/views/manageSubCategory.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('manageBrand', {
      url: '/manageBrand',
      templateUrl: 'iservice/views/manageBrand.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('addServiceCenter', {
      url: '/addServiceCenter',
      templateUrl: 'iservice/views/addServiceCenter.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('addUser', {
      url: '/addUser',
      templateUrl: 'iservice/views/addUser.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('appliances', {
      url: '/appliances',
      templateUrl: 'iservice/views/appliances.html',
      resolve :{checkSuperAdmin: checkSuperAdmin}
    }).state('addStatus', {
      url: '/addStatus',
      templateUrl: 'iservice/views/addStatus.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('customerComplaintStatusEventLog', {
      url: '/customerComplaintStatusEventLog?id',
      templateUrl: 'iservice/views/customerComplaintStatusEventLog.html',
      resolve :{checkSuperAdmin: checkSuperAdmin}
    }).state('stockComplaintStatusEventLog', {
      url: '/stockComplaintStatusEventLog?id',
      templateUrl: 'iservice/views/stockComplaintStatusEventLog.html',
      resolve :{checkSuperAdmin: checkSuperAdmin}
    }).state('servicecentre', {
      url: '/servicecentre',
      templateUrl: 'iservice/views/manageServiceCentre.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('assignCustomerComplaintToServiceCenter', {
      url: '/assignCustomerComplaintToServiceCenter?id&cId',
      templateUrl: 'iservice/views/assignCustomerComplaintToServiceCenter.html',
      resolve :{checkLoggedin: checkLoggedin}
    }).state('assignDealerComplaintToServiceCenter', {
      url: '/assignDealerComplaintToServiceCenter?id&dId',
      templateUrl: 'iservice/views/assignDealerComplaintToServiceCenter.html',
      resolve :{checkLoggedin: checkLoggedin}
    })
  }
]);