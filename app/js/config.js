/**
 * Created by Iaroslav Zhbankov on 03.08.2016.
 */
requirejs.config({
    baseUrl: './js',
    paths: {
        jquery: '/lib/node_modules/jquery/dist/jquery.min',
        underscore: '/lib/node_modules/underscore/underscore-min',
        backbone: '/lib/node_modules/backbone/backbone-min'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    }
});

requirejs(['views/Library'], function (LibraryView) {

    $(function () {
        new LibraryView();
    });

});
