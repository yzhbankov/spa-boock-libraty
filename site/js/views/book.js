/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define('views/book', ['jquery', 'backbone', 'underscore'],
    function ($, Backbone, _, BookView) {
        console.log("views book.js connected");

        BookView = Backbone.View.extend({
            events: {
                'click .delete': 'deleteBook'
            },

            deleteBook: function () {
                //Delete model
                this.model.destroy();

                //Delete view
                this.remove();
            },
            tagName: 'div',
            className: 'bookContainer',
            template: _.template($('#bookTemplate').html()),

            render: function () {
                //this.el is what we defined in tagName. use $el to get access to jQuery html() function
                this.$el.html(this.template(this.model.attributes));

                return this;
            }
        });
        return BookView;
    });