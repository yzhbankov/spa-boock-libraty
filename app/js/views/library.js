/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define(function (require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var Book = require('models/book');
    var Library = require('collections/library');
    var BookView = require('views/book');

    return Backbone.View.extend({
        el: '#books',

        events: {
            'click #add': 'addBook'
        },

        addBook: function (e) {
            e.preventDefault();

            var formData = {};

            $('#addBook div').children('input').each(function (i, el) {
                if ($(el).val() !== '') {
                    formData[el.id] = $(el).val();
                }
            });

            this.collection.add(new Book(formData));
        },


        initialize: function () {                    // UPDATED
            //this.collection = new Library();    // UPDATED
            //this.collection.fetch({reset: true});   // NEW
            this.render();

            this.listenTo(this.collection, 'add', this.renderBook);
            this.listenTo(this.collection, 'reset', this.render); // NEW
        },

        // render library by rendering each book in its collection
        render: function () {
            this.collection.each(function (item) {
                this.renderBook(item);
            }, this);
        },

        // render a book by creating a BookView and appending the
        // element it renders to the library's element
        renderBook: function (item) {
            var bookView = new BookView({
                model: item
            });
            this.$el.append(bookView.render().el);
        }
    });
});