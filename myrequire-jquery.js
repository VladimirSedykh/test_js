(function() {

  console.group('myRequire');

  var _files;
  var methods = {

    place : function(files, fn) {
      _files = files.split(', ');

      var cache_key = '?' + Math.floor(Math.random() * (90000 - 100 + 1)) + 100;

      for (var i = 0; i < _files.length; i++) {
        console.log('placed file: ', _files[i]);
        methods.create(_files[i]);
      }
      methods.callback(fn);
    },

    remove : function(files, fn) {
      _files = files.split(', ');
      for (var i = 0; i < _files.length; i++) {
        methods.del(_files[i]);
      }
    },

    create : function(file_name) {
      var s = document.createElement('script');
      s.setAttribute('src', file_name);
      s.async = false;
      document.body.appendChild(s)
    },

    del : function(file_name) {
      //console.log('del');
    },

    callback : function(fn) {
      if(typeof(fn) == 'function') {
        setTimeout(function() { fn(); }, 500);
      }
    },

    error : function( ) {
      throw 'wrong call of myRequire. Must be arguments like: \n "method (place, remove)" \n "path to file"';
    }
  };

  $myRequire = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      return methods.error.apply( this, arguments );
    } else {
      return methods.error.apply( this, arguments );
    }
  };

  if(typeof($options) == 'undefined') {
    $myRequire('place', 'myConfig/config.js', function() {
      _files = $options.default_files;
      $myRequire('place', _files);
    });
  }

})();