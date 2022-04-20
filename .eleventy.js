const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ './src/_assets': 'assets' });
  eleventyConfig.addPassthroughCopy('./src/**/!(_assets)/*.{png,jpeg}');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/CNAME');
  eleventyConfig.addPassthroughCopy('./src/sitemap.xml');

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      passthroughFileCopy: true,
      input: "./src",
      output: "./docs",
      includes: "./_includes",
      layouts: '_layouts'
    }
  };
}
