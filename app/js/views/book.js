/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define(function (require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var bookViewTemplate = require('text!views/template/bookViewTemplate.html');
    var bookDetailsTemplate = require('text!views/template/bookDetailsTemplate.html');


    return Backbone.View.extend({
        events: {
            'click .delete': 'deleteBook'
        },

        deleteBook: function () {
            //Delete model
            this.model.destroy();

            //Delete view
            this.remove();
        },
        template: _.template(bookViewTemplate),

        render: function () {
            //this.el is what we defined in tagName. use $el to get access to jQuery html() function
            this.$el.html(this.template(this.model.attributes));

            return this;
        }

    });

});