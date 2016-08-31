/**
 * Created by Iaroslav Zhbankov on 15.08.2016.
 */

define(function (require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var addNewBookTemplate = require('text!views/template/addNewBookTemplate.html');
    var Book = require('models/book');

    return Backbone.View.extend({
        events: {
            'click .js-add-book': 'addBook'
        },

        template: _.template(addNewBookTemplate),

        addBook: function (e) {
            e.preventDefault();
            var formData = {};
            var emptyFields = '';

            $(".js-addBook div").children('input').each(function (i, el) {
                if ($(el).val() !== "") {
                    formData[el.id] = $(el).val();
                } else {
                    emptyFields += el.id + ", ";
                }
            });

            if (formData.author && formData.title && formData.keywords && formData.releaseDate && formData.description) {
                var newBook = new Book(formData);
                newBook.save();
                $('.js-notification').append('<div class="alert alert-success">' +
                    '<strong> Success!</strong>' + 'The book was add successfully!' +
                    '</div>');
                setTimeout(function () {
                    $(".js-notification").empty();
                }, 3000);

                $(".js-addBook div").children('input').each(function (i, el) {
                    el.value = '';
                });

            } else {
                $('.js-notification').append('<div class="alert alert-warning">' +
                    '<strong> Warning!</strong>' + 'You should enter <strong>' + emptyFields + '</strong> info' +
                    '</div>');
                setTimeout(function () {
                    $(".js-notification").empty();
                }, 3000);
            }

        },

        hide: function () {
            var same = this;
            var ticks = 0;
            var clock = setInterval(function () {
                ticks++;
                same.$el.css("opacity", (0.1 * (10 - ticks)).toString());
                if (ticks == 10) {
                    clearInterval(clock);
                    same.$el.hide();
                }
            }, 50);
        },
        show: function () {
            var same = this;
            var ticks = 0;
            var clock = setInterval(function () {
                ticks++;
                if (ticks >= 10) {
                    same.$el.show();
                    same.$el.css("opacity", (0.1 * (ticks - 10)).toString());
                }
                if (ticks == 20) {
                    clearInterval(clock);
                }
            }, 50);
        },

        render: function () {
            var same = this;
            var ticks = 0;
            var clock = setInterval(function () {
                ticks++;
                if (ticks >= 10) {
                    same.$el.html(same.template());
                    same.$el.css("opacity", (0.1 * (ticks - 10)).toString());
                }
                if (ticks == 20) {
                    clearInterval(clock);
                }
            }, 50);
            return same;
        }
    });

});