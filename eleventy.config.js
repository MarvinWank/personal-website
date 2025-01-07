const fs = require("fs");
const path = require("path");
const nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
    // Output directory: _site

    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("img");

    eleventyConfig.addShortcode("link", (href, text) => {
        const template = fs.readFileSync(path.join(__dirname, "_includes", "components", "link.njk"), "utf-8");
        return nunjucks.renderString(template, { href, text });
    });

    eleventyConfig.addShortcode("tech_item", (image, text, alt) => {
        const template = fs.readFileSync(path.join(__dirname, "_includes", "components", "techstack-item.njk"), "utf-8");
        return nunjucks.renderString(template, { image, text, alt });
    });

    // // Copy `css/fonts/` to `_site/css/fonts`
    // // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("css/fonts");
    //
    // // Copy any .jpg file to `_site`, via Glob pattern
    // // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("**/*.jpg");
};