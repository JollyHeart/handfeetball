const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add a date filter for Nunjucks
  eleventyConfig.addFilter("date", function(dateObj, format = "yyyy") {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // Copy static assets like images, CSS, JS
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      includes: "_includes",        // looks inside src/_includes
      layouts: "_includes/layouts", // looks inside src/_includes/layouts
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
