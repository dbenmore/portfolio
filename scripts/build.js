var fs = require('fs');
var pug = require('pug');

// Compile the template to a function string
var jsFunctionString = pug.compileFileClient('src/articles.pug', {name: "fancyTemplateFun"});

// Maybe you want to compile all of your templates to a templates.js file and serve it to the client
fs.writeFileSync("docs/article.html", jsFunctionString);
