/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  System.config({
    // map tells the System loader where to look for things
    map: {
      // application
      "app": "app",
      // angular
      "@angular/core": "lib/@angular/core/bundles/core.umd.min.js",
      "@angular/common": "lib/@angular/common/bundles/common.umd.min.js",
      "@angular/compiler": "lib/@angular/compiler/bundles/compiler.umd.min.js",
      "@angular/platform-browser": "lib/@angular/platform-browser/bundles/platform-browser.umd.min.js",
      "@angular/platform-browser-dynamic": "lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js",
      "@angular/http": "lib/@angular/http/bundles/http.umd.min.js",
      "@angular/router": "lib/@angular/router/bundles/router.umd.min.js",
      "@angular/forms": "lib/@angular/forms/bundles/forms.umd.min.js",
      // angular test
      "@angular/core/testing": "lib/@angular/core/bundles/core-testing.umd.js",
      "@angular/common/testing": "lib/@angular/common/bundles/common-testing.umd.js",
      "@angular/compiler/testing": "lib/@angular/compiler/bundles/compiler-testing.umd.js",
      "@angular/platform-browser/testing": "lib/@angular/platform-browser/bundles/platform-browser-testing.umd.js",
      "@angular/platform-browser-dynamic/testing": "lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js",
      "@angular/http/testing": "lib/@angular/http/bundles/http-testing.umd.js",
      "@angular/router/testing": "lib/@angular/router/bundles/router-testing.umd.js",
      "@angular/forms/testing": "lib/@angular/forms/bundles/forms-testing.umd.js",
      // other
      "rxjs": "lib/rxjs"
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      "app": {
        main: "main.js",
        defaultExtension: "js"
      },
      "rxjs": {
        defaultExtension: "js"
      }
    }
  });
})(this);
