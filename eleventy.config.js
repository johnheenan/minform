/* Base Eleventy Blades config */
import baseConfig from "@anyblades/eleventy-blades-base";

/* Libraries */
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

/* Minform */
import minformConfig from "./minform/minform.config.js";

/**
 * Eleventy Configuration
 * @param {Object} eleventyConfig - The Eleventy configuration object
 * @returns {Object} The Eleventy configuration object
 */
export default async function (eleventyConfig) {
  await baseConfig(eleventyConfig, {
    plugins: { "@anyblades/eleventy-blades": { mdAutoRawTags: false } },
  });

  eleventyConfig.setLiquidOptions({ dynamicPartials: true, jsTruthy: true });
  eleventyConfig.setLibrary("md", markdownIt().use(markdownItAnchor));

  minformConfig(eleventyConfig);
}
