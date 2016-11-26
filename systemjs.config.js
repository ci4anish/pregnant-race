 (function(global) {
    var map = {
      'app': 'app',
      // angular bundles
      '@angular':                   'node_modules/@angular',
      // other libraries
      'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
      'rxjs':                       'node_modules/rxjs'
    };
    var packages = {
      'app': { main: 'main.js',  defaultExtension: 'js' },
      'rxjs':{ defaultExtension: 'js' },
      'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };
    var ngPackageNames = [
     'common',
     'compiler',
     'core',
     'forms',
     'http',
     'platform-browser',
     'platform-browser-dynamic',
     'platform-server',
     'router',
     'upgrade',
      'material'
    ]; //adding 'material' to the array causes a different 404 error
    function packIndex(pkgName) {
      packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    function packUmd(pkgName) {
   packages['@angular/'+pkgName] = { 
     main: (pkgName !== 'material' ? 'bundles/' : '') + pkgName + '.umd.js', 
     defaultExtension: 'js' 
   };
}
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig); 
    var config = {
      map: map,
      packages: packages
    };
    System.config(config);

  })(this); //end of function(global)