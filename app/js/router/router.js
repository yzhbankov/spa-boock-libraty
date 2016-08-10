/**
 * Created by Iaroslav Zhbankov on 08.08.2016.
 */

define(function(require) {
    var Backbone = require('backbone');
    var LibraryView = require('views/Library');
    var Library = require('collections/library');
    var DetailedBookView = require('views/detailedBook');
    var Book = require('models/book');
    var $ = require('jquery');

    return Backbone.Router.extend({
        initialize: function(){
            this.library = new Library();
            this.library.fetch({reset: true});

        console.log(this.library.length);

        },
        routes: {
            "": "libraryView",
            "library": "libraryView",
            "book": "bookView"

        },
        libraryView: function () {
                new LibraryView({collection: this.library});
        },
        bookView: function(){
                var book = new Book();
                var bookView = new DetailedBookView({el:"#books", model: book});
                bookView.render();
        }
    });
});