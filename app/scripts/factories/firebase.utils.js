'use strict';
/*jshint unused:vars*/
// a simple wrapper on Firebase and AngularFire to simplify deps and keep things DRY
angular.module('firebase.utils', [])
  .factory('fbutil', ['$window', 'FBURL', '$firebase', function($window, FBURL, $firebase) {
    function pathRef(args) {
      for (var i = 0; i < args.length; i++) {
        if (angular.isArray(args[i])) {
          args[i] = pathRef(args[i]);
        }
        else if( typeof args[i] !== 'string' ) {
          throw new Error('Argument '+i+' to firebaseRef is not a string: '+args[i]);
        }
      }
      return args.join('/');
    }

    /**
     * Example:
     * <code>
     *    function(firebaseRef) {
       *       var ref = firebaseRef('path/to/data');
       *    }
     * </code>
     *
     * @function
     * @name firebaseRef
     * @param {String|Array...} path relative path to the root folder in Firebase instance
     * @return a Firebase instance
     */
    function firebaseRef(path) {
      var ref = new $window.Firebase(FBURL);
      var args = Array.prototype.slice.call(arguments);
      if( args.length ) {
        ref = ref.child(pathRef(args));
      }
      return ref;
    }

    /**
     * Create a $firebase reference with just a relative path. For example:
     *
     * <code>
     * function(syncData) {
       *    // a regular $firebase ref
       *    $scope.widget = syncData('widgets/alpha');
       *
       *    // or automatic 3-way binding
       *    syncData('widgets/alpha').$bind($scope, 'widget');
       * }
     * </code>
     *
     * Props is the second param passed into $firebase. It can also contain limit, startAt, endAt,
     * and they will be applied to the ref before passing into $firebase
     *
     * @function
     * @name syncData
     * @param {String|Array...} path relative path to the root folder in Firebase instance
     * @param {object} [props]
     * @return a Firebase instance
     */
    function syncData(path, props) {
      var ref = firebaseRef(path);
      props = angular.extend({}, props);
      angular.forEach(['limit', 'startAt', 'endAt'], function(k) {
        if( props.hasOwnProperty(k) ) {
          var v = props[k];
          ref = ref[k].apply(ref, angular.isArray(v)? v : [v]);
          delete props[k];
        }
      });
      return $firebase(ref, props);
    }
    return {
      syncObject: function(path, factoryConfig) {
        return syncData.apply(null, arguments).$asObject();
      },

      syncArray: function(path, factoryConfig) {
        return syncData.apply(null, arguments).$asArray();
      },

      ref: firebaseRef
    };
 }]);

