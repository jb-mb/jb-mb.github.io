
module.exports = async function (eleventyConfig) {

  const { dateToRfc3339 } = await import("@11ty/eleventy-plugin-rss");

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("dateToRfc3339", dateToRfc3339);
  eleventyConfig.addFilter("dateDisplay", (date) => new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(date));

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };

};
