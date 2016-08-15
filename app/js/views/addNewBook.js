/**
 * Created by Iaroslav Zhbankov on 15.08.2016.
 */

define(function (require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var addNewBookTemplate = require('text!views/template/addNewBookTemplate.html');


    return Backbone.View.extend({

        template: _.template(addNewBookTemplate),

        hide: function () {
            this.$el.hide();
            //this.remove();
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