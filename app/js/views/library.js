/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define(function (require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var BookView = require('views/book');

    return Backbone.View.extend({

        initialize: function () {                    // UPDATED
            $("#matrix").on("click", function () {
                $("#list").prop("checked", false);
                $(".matrixBook").removeClass("listBook");

            });
            $("#list").on("click", function () {
                $("#matrix").prop("checked", false);
                $(".matrixBook").addClass("listBook");
            });
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
            this.$el.css("opacity", "0.1");
            var same = this;
            var ticks = 0;
            var clock = setInterval(function () {
                ticks++;
                    same.$el.css("opacity", (0.1 * (ticks)).toString());
                if (ticks == 10) {
                    clearInterval(clock);
                }
            }, 50);

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
        }
    });
});