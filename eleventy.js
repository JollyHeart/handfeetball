// .eleventy.js
module.exports = function(eleventyConfig) {
  // Copy images, CSS, JS directly to _site
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",        // Where your .md files live
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

eleventyConfig.addPassthroughCopy("admin");
eleventyConfig.addPassthroughCopy("src/images"); // so uploaded images are published