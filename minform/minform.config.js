import fs from "fs"
import eleventyAutoCacheBuster from "eleventy-auto-cache-buster"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import {format} from "date-fns"

/**
 * Additional eleventy configuration
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});  
  
  eleventyConfig.addFilter("dataNavigation", function (nav) {
    return {
      title: this.ctx.site.title,
      nav_pages: nav,
      current_url: this.page.url,
    };
  });

  eleventyConfig.addFilter("file_included", function (rawInput) {
    const re = /{%[\s]+include /s; //if include used then use a test to variables that are global
    return re.test(rawInput);
  });

  eleventyConfig.addFilter("mailformResponseTarget", function (target) {
    if (!target || target == "internal") {
      return "internalResponse";
    }
    return target;
  });

  eleventyConfig.addFilter("addformurl", function (contact, formurl) {
    let urlpath = formurl.formpath;
    if (formurl.corsprod?.toLowerCase() == "true" || formurl.prod?.toLowerCase() == "false" || !formurl.prod) urlpath = formurl.corsurl + urlpath;
    let nohtmx = formurl.nohtmx
    let nohtmxheaders = formurl.nohtmxheaders
    return { ...contact, ...{ urlpath, nohtmx, nohtmxheaders} }
  });

  eleventyConfig.addShortcode("source", function (file) {
    if (!file) file = this.page.inputPath;
    let contents = fs.readFileSync(file, "utf8");
    return contents;
  });

  eleventyConfig.addShortcode("npm_package_version", function () {
    return process.env.npm_package_version;
  });

  eleventyConfig.addShortcode("displayDate", (dateObj, dateformat) => {
    if (!dateformat) dateformat = 'dd MMMM, yyyy'
    console.log(dateformat)    
    return format(dateObj, dateformat)
  });

}
