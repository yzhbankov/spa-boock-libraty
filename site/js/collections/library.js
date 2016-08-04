/**
 * Created by Iaroslav Zhbankov on 25.07.2016.
 */
define('collections/library',['backbone', 'models/book'],
    function(Backbone, Book, Library) {
        console.log("library.js connected");
         Library = Backbone.Collection.extend({
            model: Book,
            url: '/api/books'
        });
    return Library;
    });