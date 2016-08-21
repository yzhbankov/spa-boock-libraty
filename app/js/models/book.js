/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define(function (require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
       /* initialize: function(){
            this.listenTo(this, 'sync', console.log("model synchronized"));
        },*/
        urlRoot: '/api/books',
        defaults: {
            coverImage: 'img/book-title.jpg',
            title: 'No title',
            author: 'Unknown',
            releaseDate: 'Unknown',
            description: "None",
            keywords: 'None'

        }
    });
});