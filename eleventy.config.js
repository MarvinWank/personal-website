const fs = require("fs");
const path = require("path");
const nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
    // Output directory: _site

    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("img");

    eleventyConfig.addShortcode("link", (href, text) => {
        const templatePath = path.join(__dirname, "_includes", "components", "link.njk");
        const template = fs.readFileSync(templatePath, "utf-8");

        return nunjucks.renderString(template, { href, text });
    });

    // // Copy `css/fonts/` to `_site/css/fonts`
    // // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("css/fonts");
    //
    // // Copy any .jpg file to `_site`, via Glob pattern
    // // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("**/*.jpg");
};