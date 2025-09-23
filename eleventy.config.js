module.exports = function(eleventyConfig) {
  // Copy static assets like images, CSS, JS
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
eleventyConfig.addPassthroughCopy("admin");
eleventyConfig.addPassthroughCopy("src/images"); // so uploaded images are published
