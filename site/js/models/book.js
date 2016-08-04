/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define('models/book', ['backbone'],
    function (Backbone, Book) {
        console.log("models book.js connected");
        Book = Backbone.Model.extend({
            defaults: {
                coverImage: 'img/cover.png',
                title: 'No title',
                author: 'Unknown',
                releaseDate: 'Unknown',
                keywords: 'None'
            }
        });
        return Book;
    });