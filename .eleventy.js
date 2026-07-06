module.exports = function (eleventyConfig) {

  // Copy CSS, images, JS directly to output
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};