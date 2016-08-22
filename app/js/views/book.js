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
        tagName: "div",
        className: "matrixBook",

        deleteBook: function () {
            //Delete model
            this.model.destroy();

            //Delete view
            var same = this;
            var ticks = 0;
            var clock = setInterval(function() {
                ticks++;
                same.$el.css("opacity",(0.1*(10-ticks)).toString());
                if (ticks == 10) {
                    clearInterval(clock);
                    same.remove();
                }
            }, 50);
        },
        template: _.template(bookViewTemplate),

        render: function () {

            this.$el.html(this.template(this.model.attributes));

            return this;
        }

    });

});