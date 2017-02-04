/**
 * Created by Iaroslav Zhbankov on 08.08.2016.
 */

define(function (require) {
    var Backbone = require('backbone');
    var LibraryView = require('views/library');
    var Library = require('collections/library');
    var DetailedBookView = require('views/detailedBook');
    var AddNewBookView = require('views/addNewBook');
    var Book = require('models/book');
    var $ = require('jquery');

    return Backbone.Router.extend({
        initialize: function () {
            this.library = new Library();
            this.library.fetch();
            this.switch = true;
        },
        routes: {
            "": "goToLibrary",
            "library": "goToLibrary",
            "book/:id": "goToBookDetails",
            "add": "addNewBook"

        },
        goToLibrary: function () {
            $(".js-add-button").show();
            var libraryLength = this.library.length;
            this.library.fetch();
            if (!this.libraryView) {
                this.libraryView = new LibraryView({collection: this.library});
                this.libraryView.$el.appendTo(".js-library-container");
                this.library.reset();
            } else if (libraryLength < this.library.length) {
                this.libraryView = new LibraryView({collection: this.library});
                this.libraryView.$el.appendTo(".js-library-container");
            } else {
                this.libraryView.show();
            }
            if (this.bookView) {
                this.bookView.hide();
            }
            if (this.addNewBookView) {
                this.addNewBookView.hide();
            }
        },

        goToBookDetails: function (id) {
            var bookModel = this.library.at(id);

            if (!bookModel) {
                var currentId = Number(id) + 1;
                bookModel = new Book({id: currentId});
                bookModel.fetch();
            }

            if (this.libraryView) {
                this.libraryView.hide();
            }

            if (!this.bookView) {
                this.bookView = new DetailedBookView({
                    model: bookModel
                });
                this.bookView.$el.appendTo(".js-book-container");
            } else {
                this.bookView.model = bookModel;
                this.bookView.show();
                this.bookView.render();
            }
        },

        addNewBook: function () {
            if (this.libraryView) {
                this.libraryView.hide();
            }
            if (this.bookView) {
                this.bookView.hide();
            }

            if (!this.addNewBookView) {
                this.addNewBookView = new AddNewBookView({collection: this.library});
                this.addNewBookView.render();
                this.addNewBookView.$el.appendTo(".js-add-container");
            } else {
                this.addNewBookView.show();
            }
            $(".js-add-button").hide();
        }
    });
});