/**
 * Created by Iaroslav Zhbankov on 26.07.2016.
 */
var express = require('./app/lib/node_modules/express/index.js');
var bodyParser = require('./app/lib/node_modules/body-parser/index.js');
var app = express();

var books = [
    {
        id: 1,
        title: "Developing Backbone.js Applications",
        author: "Addy Osmani",
        releaseDate:"May 2013",
        description: "If you want to build your site is frontend with the" +
        "single-page application (SPA) model, this hands-on book shows you" +
        "how to get the job done with Backbone.js. You will learn how to create" +
        "structured JavaScript applications, using Backbone is own flavor of" +
        "model-view-controller (MVC) architecture.",
        keywords:"Backbone, JavaScript, SPA"
    },
    {
        id: 2,
        title: "Web Development with MongoDB and NodeJS, 2nd Edition",
        author: "Mithun Satheesh, Bruno Joseph D mello, Jason Krol",
        releaseDate:"October 2015",
        description:"Configure your development environment to use Node.js and MongoDB"+
        "Use Node.js to connect to a MongoDB database and perform data manipulations"+
        "A practical guide with clear instructions to design and develop a complete web...",
        keywords:"MongoDB, NodeJS, guide"
    },
    {
        id: 3,
        title: "MapReduce Design Patterns, 2nd Edition",
        author: "Donald Miner, Adam Shook",
        releaseDate:"October 2016",
        description:"This handy guide brings together a unique collection of valuable" +
        " MapReduce patterns that will save you time and effort regardless of the domain," +
        " language, or development framework you are using. Updated to include new versions" +
        " of Hadoop, this second edition features several new patterns, such as transformation, join with a...",
        keywords:"edsign, programming, patterns, JavaScript"

    }
];

var nextId = 4;

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    if(req.url.indexOf("/api") === 0 ||
        req.url.indexOf("/bower-components") === 0 ||
        req.url.indexOf("/scripts") === 0) {
        return next();
    }

    res.sendFile(__dirname + '/app/index.html');
});

app.get('/api/books', function(req, res) {
    res.json(books);
});

app.get('/api/books/:id', function(req, res) {
    var book = books.filter(function(book) { return book.id == req.params.id; })[0];

    if(!book) {
        res.statusCode = 404;
        return res.json({ msg: "Book does not exist" });
    }

    res.json(book);
});

app.post('/api/books', function(req, res) {
    if(!req.body.author || !req.body.title || !req.body.releaseDate || !req.body.keywords || !req.body.description) {
        res.statusCode = 400;
        return res.json({ msg: "Invalid params sent" });
    }

    var newBook = {
        author : req.body.author,
        title : req.body.title,
        releaseDate : req.body.releaseDate,
        description : req.body.description,
        keywords : req.body.keywords,
        id: nextId++
    };

    books.push(newBook);

    res.json(newBook);
});

app.put('/api/books/:id', function(req, res) {
    if(!req.body.author || !req.body.title || !req.body.releaseDate || !req.body.keywords || !req.body.description) {
        res.statusCode = 400;
        return res.json({ msg: "Invalid params sent" });
    }

    var book = books.filter(function(book) { return book.id == req.params.id; })[0];

    if(!book) {
        res.statusCode = 404;
        return res.json({ msg: "Book does not exist" });
    }

    book.author = req.body.author;
    book.title = req.body.title;
    book.releaseDate = req.body.releaseDate;
    book.keywords = req.body.keywords;
    book.description = req.body.description;

    res.json(book);
});

app.delete('/api/books/:id', function(req, res) {
    var book = books.filter(function(book) { return book.id == req.params.id; })[0];

    if(!book) {
        res.statusCode = 404;
        return res.json({ msg: "Book does not exist" });
    }

    books.splice(books.indexOf(book), 1);

    res.statusCode = 204;
    res.send({});
});

app.listen(8000);