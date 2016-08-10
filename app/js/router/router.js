/**
 * Created by Iaroslav Zhbankov on 08.08.2016.
 */

define(function(require) {
    var Backbone = require('backbone');
    var LibraryView = require('views/Library');
    var BookView = require('views/book');
    var DetailedBookView = require('views/detailedBook');
    var Book = require('models/book');
    var $ = require('jquery');

    return Backbone.Router.extend({
        routes: {
            "": "libraryView",
            "library": "libraryView",
            "book": "bookView"
        },
        libraryView: function () {
            $(function () {
                new LibraryView();
            });
        },
        bookView: function(){
            $(function () {
                var book = new Book();
                var bookView = new DetailedBookView({el:"#books", model: book});
                bookView.render();
            });
        }
    });
});