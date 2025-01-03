const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addWatchTarget("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/shrine");
  eleventyConfig.addWatchTarget("./src/shrine");
  eleventyConfig.addPlugin(feedPlugin, {
	type: "rss", // or "atom", "json"
	outputPath: "/feed.xml",
	collection: {
		name: "posts", // iterate over `collections.posts`
		limit: 5,     // 0 means no limit
	},
	metadata: {
		language: "en",
		title: "Blog of the Grubby Dog",
		subtitle: "Where I scream about viddy games.",
		base: "https://your-local-grubdog.neocities.org/blog/",
		author: {
			name: "Grubdog",
			email: "", // Optional
		}
	}
});

return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};