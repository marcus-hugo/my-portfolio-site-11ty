const { DateTime } = require("luxon")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass")
  // eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy("./src/assets")
  eleventyConfig.addPassthroughCopy("./src/js/")
  eleventyConfig.addPassthroughCopy("./src/admin")
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addFilter("postDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}
