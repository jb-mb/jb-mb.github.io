const { dateToRfc3339 } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("dateToRfc3339", dateToRfc3339);

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };

};
