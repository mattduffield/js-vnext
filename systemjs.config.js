(function (global) {
  System.config({
    baseURL: "src",
    defaultJSExtensions: true,      
    transpiler: 'plugin-babel',
    meta: {
      '*.js': {
        babelOptions: {
          stage0: true,
          // The following loads the plugin: transform-decorators-legacy
          plugins: ['https://fec.blob.core.windows.net/bundles/babel-plugin-transform-decorators-legacy/decorators-plugin-build.js'],
        }        
      },      
    },    
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // SystemJS Plugins
      'plugin-babel':               'npm:systemjs-plugin-babel@0.0.25/plugin-babel.js',
      'systemjs-babel-build':       'npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',
      'plugin-css':                 'npm:systemjs-plugin-css@0.1.37/css.js',
      'babel-polyfill':             'npm:babel-polyfill@^6.26.0/dist/polyfill.min.js',
      'bluebird':                   'npm:bluebird@3.5.1/js/browser/bluebird.min.js',
      // Custom Dependencies - these vary per project
      // 'bootstrap':                  'npm:bootstrap@3.3.7',  
      // Aurelia Plugins
      'aurelia-binding':            'npm:aurelia-binding@1.7.1/dist/amd/aurelia-binding.js',
      'aurelia-bootstrapper':       'npm:aurelia-bootstrapper@2.2.0/dist/amd/aurelia-bootstrapper.js',
      'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2/dist/amd/aurelia-dependency-injection.js',
      'aurelia-event-aggregator':   'npm:aurelia-event-aggregator@1.0.1/dist/amd/aurelia-event-aggregator.js',
      'aurelia-fetch-client':       'npm:aurelia-fetch-client@1.3.1/dist/amd/aurelia-fetch-client.js',
      'aurelia-framework':          'npm:aurelia-framework@1.1.5/dist/amd/aurelia-framework.js',
      'aurelia-history':            'npm:aurelia-history@1.1.0/dist/amd/aurelia-history.js',
      'aurelia-history-browser':    'npm:aurelia-history-browser@1.1.1/dist/amd/aurelia-history-browser.js',
      'aurelia-loader':             'npm:aurelia-loader@1.0.0/dist/amd/aurelia-loader.js',
      'aurelia-loader-default':     'npm:aurelia-loader-default@1.0.3/dist/amd/aurelia-loader-default.js',
      'aurelia-logging':            'npm:aurelia-logging@1.4.0/dist/amd/aurelia-logging.js',
      'aurelia-logging-console':    'npm:aurelia-logging-console@1.0.0/dist/amd/aurelia-logging-console.js',
      'aurelia-metadata':           'npm:aurelia-metadata@1.0.3/dist/amd/aurelia-metadata.js',
      'aurelia-pal':                'npm:aurelia-pal@1.7.0/dist/amd/aurelia-pal.js',
      'aurelia-pal-browser':        'npm:aurelia-pal-browser@1.7.0/dist/amd/aurelia-pal-browser.js',
      'aurelia-path':               'npm:aurelia-path@1.1.1/dist/amd/aurelia-path.js',
      'aurelia-polyfills':          'npm:aurelia-polyfills@1.3.0/dist/amd/aurelia-polyfills.js',
      'aurelia-router':             'npm:aurelia-router@1.5.0/dist/amd/aurelia-router.js',
      'aurelia-route-recognizer':   'npm:aurelia-route-recognizer@1.1.1/dist/amd/aurelia-route-recognizer.js',
      'aurelia-task-queue':         'npm:aurelia-task-queue@1.2.1/dist/amd/aurelia-task-queue.js',
      'aurelia-templating':         'npm:aurelia-templating@1.7.0/dist/amd/aurelia-templating.js',
      'aurelia-templating-binding': 'npm:aurelia-templating-binding@1.4.1/dist/amd/aurelia-templating-binding.js',
      // Aurelia Custom configuration
      'aurelia-templating-resources': 'npm:aurelia-templating-resources@1.6.0/dist/amd',
      'aurelia-templating-router':  'npm:aurelia-templating-router@1.3.1/dist/amd',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      src: {
        defaultExtension: 'js',
        meta: {
          '*.css': {
            loader: 'plugin-css'
          },
          '*.js': {
            loader: 'systemjs-loader.js'
          },
        }
      },
      'aurelia-templating-resources': {
        main: 'aurelia-templating-resources.js',
        defaultExtension: 'js',
      },
      'aurelia-templating-router': {
        main: 'aurelia-templating-router.js',
        defaultExtension: 'js',
      },
    }
  });
  
  System.import('aurelia-bootstrapper');  
})(this);

