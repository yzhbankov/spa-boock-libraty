/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define(function (require) {
    var Backbone = require('backbone');
    var Book = require('models/book');

    return Backbone.Collection.extend({
        model: Book,
        url: '/api/books'
    });
});