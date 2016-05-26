(function(global) {
    // ENV
    global.ENV = 'development'

    // wildcard paths
    var paths = {
        'n:*': 'node_modules/*'
    };

    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        // 'rxjs': 'n:rxjs',
        '@angular': 'n:@angular',
        'lodash': 'n:lodash'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            defaultExtension: 'js'
        },
        // 'rxjs': {
        //     main: 'bundles/Rx.umd.min.js',
        //     defaultExtension: 'js'
        // },
        'lodash' : {
            main: 'lodash.js',
            defaultExtension: 'js'
        },
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/testing',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        var name = pkgName.indexOf("/")>0 ? pkgName.split("/")[1] : pkgName; 
        //console.log("Name:", name);
        packages[pkgName] = { main: name + '.umd.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages,
        paths: paths
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
