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
        className: "book-details",
        template: _.template(bookDetailsTemplate),
        hide: function () {
            var same = this;
            var ticks = 0;
            var clock = setInterval(function() {
                ticks++;
                same.$el.css("opacity",(0.1*(10-ticks)).toString());
                if (ticks == 10) {
                    clearInterval(clock);
                    same.$el.hide();
                }
            }, 50);
        },
        show: function () {
            var same = this;
            var ticks = 0;
            var clock = setInterval(function() {

                ticks++;
                if (ticks >= 10) {
                    same.$el.show();
                    same.$el.css("opacity",(0.1*(ticks-10)).toString());
                }

                if (ticks == 20) {
                    clearInterval(clock);
                }
            }, 50);
        },
        render: function () {
            var same = this;
            var ticks = 0;
            var clock = setInterval(function() {

                ticks++;
                if (ticks >= 10) {
                    same.$el.html(same.template(same.model.attributes));
                    same.$el.css("opacity",(0.1*(ticks-10)).toString());
                }

                if (ticks == 20) {
                    clearInterval(clock);
                }
            }, 50);


            return same;
        }

    });

});