module.exports = config => {

    // make pdfs available (copies src/pdfs to _site/pdfs)
    config.addPassthroughCopy("./src/pdfs/");

    // Set images to pass through to the dist folder
    config.addPassthroughCopy("./src/images/");

    // pass through the css files
    config.addPassthroughCopy("./src/_includes/css/");

    // ditto for .js scripts
    config.addPassthroughCopy("./src/scripts/");

    // let the favicon through
    config.addPassthroughCopy("./favicon.ico");

    // Plugins
    const rssPlugin = require('@11ty/eleventy-plugin-rss');
    config.addPlugin(rssPlugin);


    // Add filters
    const dateFilter = require('./src/filters/date-filter.js');
    const w3DateFilter = require('./src/filters/w3-date-filter.js');
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);

    // use the .eleventyignore and ignore our .gitignore file
    // (by default, eleventy follows .gitignore in ignoring .css files)
    config.setUseGitIgnore(false);

    // markdown parser + plugin to parse pandoc-style footnotes
    const markdownIt = require('markdown-it');
    const markdownItFootnote = require('markdown-it-footnote');
    config.setLibrary('md', markdownIt().use(markdownItFootnote));

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
