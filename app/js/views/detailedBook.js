/**
 * Created by Iaroslav Zhbankov on 10.08.2016.
 */
/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define(function (require) {
    var BookView = require('views/book');
    var _ = require('underscore');
    var $ = require('jquery');
    var bookDetailsTemplate = require('text!views/template/bookDetailsTemplate.html');

    return BookView.extend({
        initialize: function () {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },
        className: "detailedBook",
        template: _.template(bookDetailsTemplate),
        hide: function () {
            this.$el.hide();
            //this.remove();
        },
        show: function () {
            this.$el.show();
        }

    });

});