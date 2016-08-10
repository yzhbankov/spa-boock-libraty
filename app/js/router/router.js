/**
 * Created by Iaroslav Zhbankov on 08.08.2016.
 */

define(function (require) {
    var Backbone = require('backbone');
    var LibraryView = require('views/Library');
    var Library = require('collections/library');
    var DetailedBookView = require('views/detailedBook');
    var Book = require('models/book');
    var $ = require('jquery');

    return Backbone.Router.extend({
        initialize: function () {
            this.library = new Library();
            this.library.fetch({reset: true});
        },
        routes: {
            "": "libraryView",
            "library": "libraryView",
            "book/:id": "bookView"

        },
        libraryView: function () {
            new LibraryView({collection: this.library});
            this.library.each(function(item){console.log(item)});

        },
        bookView: function (id) {
            var book = new Book();
            var bookView = new DetailedBookView({el: "#books", model: this.library.at(id)});
            bookView.render();
        }
    });
});