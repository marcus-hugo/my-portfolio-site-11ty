const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget('./src/sass');
  // eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/js/app.js');
  eleventyConfig.addPassthroughCopy('./src/admin');
 
  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
