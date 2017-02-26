
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, $timeout, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

 
    $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){
        if(toState.data && toState.data.auth == true /*&& !$rootScope.user.emailiD*/){
          event.preventDefault();
          /*$state.go('app.login');  */ 
        }
    });

  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  .state('start', {
    url: '/start',
      
        templateUrl: 'templates/start.html',
        controller : 'StartCtrl'
  })

  .state('login', {
    url: '/login',
    cached : false,
    templateUrl: 'templates/login.html',
        controller : 'LoginCtrl'
   
  })
 .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/mainV.html',
    controller: 'AppCtrl'
  })
  
  .state('app.menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/mainV.html',
    controller: 'StartCtrl'
  })
  
  

  

  .state('app.forgot', {
    url: '/forgot',
    views: {
      'menuContent': {
        templateUrl: 'templates/forgot.html'
      }
    }
  })

  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
      }
    }
  })
  

  .state('app.account', {
      url: '/account',
      data : { auth : true },
      views: {
        'menuContent': {
          templateUrl: 'templates/account.html',
          controller : 'AccountCtrl'
        }
      }
  })

  .state('app.feed', {
    url: '/feed',
    data : { auth : true },
    views: {
      'menuContent': {
        templateUrl: 'templates/feed.html',
        controller : 'FeedsCtrl'
      }
    }
  })

  .state('app.shop', {
    url: '/shop',
    /*data : { auth : true },
    cache : false,*/
    views: {
      'menuContent': {
        templateUrl: 'templates/shop.html',
        controller : 'ShopCtrl'
      }
    }
  })

  .state('app.cart', {
    url: '/cart',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/cart.html',
        controller : 'CartCtrl'
      }
    }
  })

  .state('app.checkout', {
    url: '/checkout',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/checkout.html',
        controller : 'CheckoutCtrl'
      }
    }
  })
  
/*  .state('app.showMaps', {
    url: '/maps',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/maps.html',
        controller : 'MapsCtrl'
      }
    }
  })
*/
  .state('app.wishlist', {
    url: '/wishlist',
    /*data : { auth : true },
    cache : false,*/
    views: {
      'menuContent': {
        templateUrl: 'templates/wishlist.html',
        controller : 'WishlistCtrl'
      }
    }
  })

  .state('app.route', {
    url: '/route',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/route.html',
        controller : 'RouteCtrl'
      }
    }
  })

  .state('app.shopdetails', {
    url: '/shopdetails',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/shopdetails.html',
        controller : 'ShopDetailsCtrl'
      }
    }
  })
.state('booked', {
    url: '/booked',
        templateUrl: 'templates/booked.html',
        controller : 'MapsAfterBookCtrl'
    
  })
  
    .state('MapsShow', {
    url: '/mapsshow',
    
    templateUrl: 'templates/mapsShow.html',
    controller: 'MapsShowCtrl'
  })
  .state('homescreen', {
    url: '/home',
        templateUrl: 'templates/account.html',
        controller : 'MapsShowCtrl'
    
  })
  
  
  
  
  $urlRouterProvider.otherwise('/start');

});
