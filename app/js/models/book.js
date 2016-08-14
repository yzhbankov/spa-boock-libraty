/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define(function (require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        url: '/api/books/',
        defaults: {
            coverImage: 'img/cover.png',
            title: 'No title',
            author: 'Unknown',
            releaseDate: 'Unknown',
            description: "None",
            keywords: 'None'

        }
    });
});