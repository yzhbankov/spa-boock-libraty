/**
 * Created by Iaroslav Zhbankov on 03.08.2016.
 */
requirejs.config({
    baseUrl: './js',
    paths: {
        jquery: '../node_modules/jquery/dist/jquery.min',
        underscore: '../node_modules/underscore/underscore-min',
        backbone: '../node_modules/backbone/backbone-min',
        text:'../node_modules/text/text'
    }
});

requirejs(['router/router', 'backbone'], function (Router, Backbone) {

    var router = new Router();
    Backbone.history.start();


});
