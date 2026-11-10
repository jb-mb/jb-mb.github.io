
module.exports = async function (eleventyConfig) {

  const { dateToRfc3339 } = await import("@11ty/eleventy-plugin-rss");

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("dateToRfc3339", dateToRfc3339);

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };

};
