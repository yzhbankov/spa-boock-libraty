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
            this.library.fetch();
        },
        routes: {
            "": "goToLibrary",
            "library": "goToLibrary",
            "book/:id": "goToBookDetails"

        },
        goToLibrary: function () {
            if (!this.libraryView) {
                this.libraryView = new LibraryView({collection: this.library});
                this.libraryView.$el.appendTo(".libraryContainer");
                this.library.reset();
            } else {
                this.libraryView.show();
            }
            if (this.bookView) {
                this.bookView.hide();
            }


        },

        goToBookDetails: function (id) {
            var bookModel = this.library.at(id);

            if (this.libraryView) {
                this.libraryView.hide();
            }

            if (!this.bookView){
                this.bookView = new DetailedBookView({
                    model: bookModel
                });
                this.bookView.$el.appendTo(".bookDetailsContainer");
            } else{
                this.bookView.model.set(bookModel.attributes);
                this.bookView.show();
            }
            //this.bookView.render();

            /*
            var bookModel = this.library.at(id);

            if (this.bookView.el == undefined) {
                console.log('Creation of book View');
                this.bookView = new DetailedBookView({
                    el: "#detailedBookContainer",
                    model: bookModel
                });
            } else {
                console.log('Set attributes to model');
                this.bookView.model.set(bookModel.attributes);
            }*/
        }
    });
});