/**
 * Created by Iaroslav Zhbankov on 15.08.2016.
 */

define(function (require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var addNewBookTemplate = require('text!views/template/addNewBookTemplate.html');
    var Book = require('models/book');
    var Library = require('collections/library');

    return Backbone.View.extend({
        events: {
            'click .addNewBook': 'addBook'
        },

        template: _.template(addNewBookTemplate),

        addBook: function (e) {
            e.preventDefault();
            var formData = {};

            $("#addBook div").children('input').each(function (i, el) {
                if ($(el).val() !== "") {
                    formData[el.id] = $(el).val();
                }
            });
            var newBook = new Book(formData);
            //var bookID = this.collection.length + 1;
            newBook.save();




            /*addBook: function (e) {
             e.preventDefault();

             var formData = {};

             $('#addBook div').children('input').each(function (i, el) {
             if ($(el).val() !== '') {
             formData[el.id] = $(el).val();
             }
             });

             this.collection.add(new Book(formData));
             }*/

        },

        hide: function () {
            this.$el.hide();

        },
        show: function () {
            this.$el.show();
        },

        render: function () {

            this.$el.html(this.template());

            return this;
        }

    });

});