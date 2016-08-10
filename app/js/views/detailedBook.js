/**
 * Created by Iaroslav Zhbankov on 10.08.2016.
 */
/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define(function (require) {
    var BookView = require('views/book');
    var _ = require('underscore');
    var bookDetailsTemplate = require('text!views/template/bookDetailsTemplate.html');

    return BookView.extend({

        template: _.template(bookDetailsTemplate)
    });

});