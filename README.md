
# Minform

## Website template starter with markdown and minimalist forms

A very minimalist approach to adding in forms templating to a website starter template that supports markdown.

Provides examples of website template based on markdown and forms for easy automation of form building, using a simple and direct approach that avoids complex tooling and plumbing.

Minform is a public website template using [11ty](https://11ty.dev) static website generator.

Minform is open source with a permissive license. 

Minform is a public web template built on  [Build Awesome Starter](https://github.com/anydigital/build-awesome-starter) version [v0.8.1](https://github.com/anydigital/build-awesome-starter/releases/tag/v0.8.1) with the following additions:

## Added

The main addition is a minimalist approach to adding template based forms using two different approaches

- A simpler form addition approach, easier for beginners, that requires attention to reset variable names that are reused.
- A more abstract form addition approach that uses rendering as soon as convenient and can reuse variable names without reset. This approach is suitable for further adaptation.
- A minimal implementation of a navigation bar
- Minimal CSS additions to support above
- Small number of filters and shortcodes added
- [htmx](https://htmx.org/) added to simplify templating with only 200 OK server status response handled
- Option not to use htmx to work with traditional form submission sites without problems.
- A cors server can be specified for use in developer mode only as well as in production mode. If cors is used then a server must be configured to handle cors requests.

No state or login information used.

Using htmx, a backend server is expected to handle standard POST requests and return a simple HTML response for display in a `<div>` of the same page by htmx. The page is not replaced.

## Usage

This is a base template intended for adaptation as a template implementation.

This base template is online at at https://minform.hostfurl.com

There is an example of an adaptation as a template implementation at https://minformhf.hostfurl.com.

To view in a development environment:

- Clone repository or download a release
- `npm install`
- `npm start`
- Browse to link

## Updates

- `npm update` updates packages

## Prerequesites

Basically node/npm for a non root user with `sh` or symbolic link from `sh`, pre-installed.

If you have command interpreter `sh` in `$PATH`, then the `npm run` script will use this for POSIX shell operations.

What is required is a POSIX compliant shell and file system for use with `npm run` that includes support for `ln` and `rm`.

So, any desktop/laptop/server OS with a Linux, BSD or UNIX like kernel, including macOS; Windows with WSL; any mobile or tablet OS with app which supports a POSIX compliant shell; any embedded system with BusyBox.

Just about any system with `curl` and `sh` can install node/npm, as shown below.

What is not supported is Windows using `cmd` for `npm run`. Install WSL if using Windows.

It is expected to use `rsync` for uploading files. Normally this is pre installed.

While `git` is not required, it is expected for advanced use.

Never install and run node/npm for user root. This may not be practical for embedded systems.

### OS independent installation of node/npm

There are a variety of methods supported by OS distributions and version software.

A cross platform, OS independent, method to install up to date node/npm is to use curl and sh such as documented at [Download Node.js®](https://nodejs.org/en/download), which downloads and installs node with npm bundled.

### Installation of node/npm on Termux for Android

Termux emulates a Debian distribution on Android. A standard installation of a desktop or server OS will include prerequisites such as curl and git.

With a fresh Termux installation on Android:

```
pkg update
pkg upgrade
pkg install curl git -y
```

Either use
```
pkg install nodejs-lts -y
```
or, to help keep more up to date versions of node, use [Download Node.js®](https://nodejs.org/en/download)

### Technical Details for `ln`, `rm` and other POSIX script commands

So why not replace symbolic link script command `ln` and `rm` with `node.fs` equivalents?

1. If a file system does not already support POSIX style symbolic links then `node.fs` won't either.
1. Being able to run plain POSIX shell scripts through binary `sh` is a practical convenience.
1. It is normal practice in node to run a variety of binaries with `npm run`, not just `sh`.

Except for node as binary itself, all node/npm software runs as a script of node binary itself and npm software itself is a set of node scripts. The 'npm run' command is a node npm script that further uses `sh` as shell for additional script commands through `child_process.exec`. The shell can be bypassed through `child_process.execFile()`.

`npx`, which is installed with npm, is also a set of node scripts to load and run binaries without installing them first with `npm`.

Typically a node script will have `#!/usr/bin/env node` as first line. 

Typically, in a non server user shell, node executes as a shell launched binary to run npm and other node scripts. Hence, the node launched `npm run` script further uses sh to launch and execute POSIX scripts.

On Debian this will find `/usr/bin/sh`, a symbolic link to POSIX compliant shell dash at `/usr/bin/dash`, of size 127KB. This shell executes POSIX scripts.

On Debian, currently `node` itself as a binary has a size of 117MB, nearly a 1000 times larger than `dash`.

## Configuration

A simple approach for a backend is to take the form information and send it as an email to a server administrator, such as for a simple contact form or subscribe/unsubscribe form.

Developers are expected to use browser developer console and server logs to view server errors during development.

Additional `_data/site.yml` file variables:
- `corsprod`, set true to uses cors in production, default`false, no quote around true or false
- `corsurl` set to server url if using cors with localhost development, such as `corsurl: https://example.com`
- `formpath`: is the 'script path' and must be set for static sites, such as `formpath: /cgi-bin/minform.cgi`

For localhost development it is common to set `corsurl`. However the cors server must allow cors.

## Using with traditional third party forms submission sites

The following WILL be required in `_data/site.yml` if the cors site rejects htmx headers and/or if it is required to click on an anti spam button that uses a further remote script with a relative url. If required, the response will be on a separate page.
- `nohtmx: true`

The following MUST be set. If `corsprod` is not true then `corsurl` will not appear in production builds. After site registration the `formspath` may change to use some arbitrary string. Make sure to include `/` before this string
- `corsprod: true`
- `corsurl: https://example.com`
- `formpath: /somearbitrarycharacters`

Instead of using `nohtmx: true`, a less extreme option that does not put response on a separate page, may work instead:
- `nohtmxheaders`


##  Development and Production Versions

`npm run start` will allow you to develop and view changes as you make them. `site.prod` is false.

`npm run build` generates a production build  in `_sites`. `site.prod` is true

`npm run stage` allows the production build to be viewed locally.

## Using rsync to upload production builds

### Uploading from command line with progress view

If `user` is your SSH login name, `my.example.com` is your DNS site name and `public_html` is the directory off your home directory to upload

You can put a SSH public key in `~/.ssh/authorized_keys` to avoid using a password.

To upload new files or change existing files incrementally:
```
rsync _site/ -azvh user@my.example.com:public_html
```

To also delete files remotely that were deleted locally:

```
rsync _site/ -azvh --delete user@my.example.com:public_html
```
If you need to use an absolute directory path then include `/` at the start of the path after `:`, such as:
```
rsync _site/ -azvh user@my.example.com:/home/user/public_html
```

The included `-v` option shows files uploaded. Add in `--progress` to show progress of individual files. For files that already exist, incremental deltas of files are uploaded, not the full file.

After a rebuild, files will change due to cache busting, even with no content change. Rsync effciently finds, includes and uploads these changes without including the full file.

With heavy editing of sites with many files, consider turning off cache busting and turning on again when finished. If turning off cache busting, do not include `--delete` with rsync until cache busting is turned on again.

To turn off cache busting, comment out line
```
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
```
near start in `minform/minform.config.js` with `//` at start of line.

Depending on web server, turning off cache busting may prevent site updates from being viewed immediately with a browser refresh, unless a hard refresh or cache emptying with hard refresh is used.

### Uploading from a GitHub Action

An up to date and popular GitHub Action for rsync deployment, usable in CI/CD, is documented at [Rsync Deployments Action](https://github.com/marketplace/actions/rsync-deployments-action)

## The two approaches for using forms

The two approaches that can be used for building forms with Minform are:

- A simplified abstraction that is easy for beginners to follow. This approach requires reused variables to be kept clean by resetting after use. Shown in `contact.md`

- An example that shows more complex abstraction with convenient potential for more abstraction. This approach dramatically reduces number of variable names that need to be reset after use, by using rendering as soon as convenient. Shown in `contact2.md`.

For the first simpler approach above, it is easy to override or overwrite the configuration values above on a page by page or even within a page. If overwritten, either values should be set each time or old values should be preserved and used to reset site.yaml values. A useful concept is variables to be reused should be kept clean by resetting after use. This approach is shown code for `forms/contact.liquid` as variable names are reused.

For the second more abstract approach, these values can be overridden in frontmatter settings, as shown, and do not overwrite site.yaml values.

## CSS and Performance

The current version includes a maintained [Pico CSS](https://blades.ninja/css/pico/), [CSS blades](https://blades.ninja/css/) and does not inline CSS.

The combination of not inling CSS, using CSS files, caching CSS files, and cache busting hosted CSS files, results in great performance, efficiency and simplicity.

However this arrangement risks penalty by web page quality rankers, such as Lighthouse, which may take a few percentage points off performance result for a barely noticeble effect for a first site view (before cache becomes invalid again).

4x100 Lighthouse score from a desktop PC in Australia to https://minform.hostfurl.com v0.2.2 hosted in Europe on 5 April 2026:

Performance 100, Accessibility 100, Best Practices 100, SEO 100.


![Lighthouse score](./minform/lighthouse.png)


We may offer an additonal CSS solution in the future. However it is unlikely we will offer a utility-first CSS template example, which although reduces the size of CSS files, is bewildering for the inexperienced and expands size of individual pages.

## Background

There is no need to use a traditional script path showing an apparent directory and apparent script file for `formpath`. This naming style is used in the example for compatibility with many usage examples that expect a CGI specification, which is increasingly uncommon, not necessary and not recommended.

Examples should be provided of various backend server approaches, including scipt CGI, Node Express, various Node frameworks, PHP, Python, Perl PSGI direct, Perl PSGI framework, Perl CGI, FastCGI. Also, examples of configuration for Nginx should be provided for both FastCGI and reverse proxy.

For example, the Perl PSGI specification is flexible enough to allow an app to appear to be a CGI app when it is not, using traditional CGI, using FastCGI as an intermediary or using reverse proxy to a persistent PSGI process. Hence a PSGI app can work work as a CGI script even though it is written as a PSGI persistent app.

While Nginx cannot launch CGI scripts, Nginx can interface to persistent processes using a pool of FastCGI processes. A FastCGI process can itself launch self terminating CGI scripts.

`mod_perl` for Apache allows use of persistent Perl processes. However it should be kept in mind that each web request to Apache launches a new Apache thread.

### A note on web server to back end server handling differences:

- CGI: A separate process is launched for each web request with communication by standard input/output/error and with process start up environment variables injected by web server. Not CPU efficient. Does not consume memory when not in use.
- FastCGI: A persistent process is launched with communication by network, socket or named pipes. What would have been CGI environment variables are now passed though IPC agreed variables. A common approach for PHP with Nginx. CPU efficient. Consumes memory when not in use.
- Reverse Proxy: a persistent process with communication by network or socket without extra environment variables after launch or additional IPC protocols. Additional variables passed through as injected http headers. A common approach for docker and other containers, and for node servers, to avoid directly facing public Internet by letting the web server handle TLS, caching, DNS name use and port remapping.
