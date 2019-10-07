const links = require("./src/data/links.json");
const articles = require("./src/data/articles.json");

module.exports = {
  locals: {
    whoAmI: '[ Daniel Benmore &middot; UX Engineer &middot; London UK ]',
    links: links,
    articles: articles
  }
};
