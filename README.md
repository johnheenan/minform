
# Minform

## Website template starter with markdown and minimalist forms

A very minimalist approach to adding in forms templating to a website starter template that supports markdown.

Provides examples of website template based on markdown and forms for easy automation of form building, using a simple and direct approach that avoids complex tooling and plumbing.

Minform is a public website template using [11ty](https://11ty.dev) static website generator.

Minform is open source with a permissive license. 

Minform is a public web template built on [Sveleven](https://github.com/anydigital/sveleven) with the following additions:

## Added

The main addition is a minimalist approach to adding template based forms using two different approaches

- A simpler form addition approach, easier for beginners, that requires attention to reset variable names that are reused.
- A more abstract form addition approach that uses rendering as soon as convenient and can reuse variable names without reset. This approach is suitable for further adaptation.
- A minimal implementation of a navigation bar
- Minimal CSS additions to support above
- Small number of filters and shortcodes added
- [htmx](https://htmx.org/) added to simplify templating with only 200 OK server status response handled
- A cors server can be specified for use in developer mode only as well as in production mode. If cors is used then a server must be configured to handle cors requests.

No state or login information used.

Using htmx, a backend server is expected to handle standard POST requests and return a simple HTML response for display in a `<div>` of the same page by htmx. The page is not replaced.


## Usage

This is a base template that does not expect direct live use. It is expected template implementations will show live examples. 

Due to the enormous number of different usage possibilities requiring adaptation, simulating a backend server or providing a direct example of use with a backend server adds unnecessary complication and potentially confusion.

To view development examples:

- Clone repository or download a release
- `npm install`
- `npm start`
- Browse to link



## Configuration

A simple approach for a backend is to take the form information and send it as an email to a server administrator, such as for a simple contact form or subscribe/unsubscribe form.

Developers are expected to use browser developer console and server logs to view server errors during development.

Additional site.yml file variables:
- `corsprod`, set true to uses cors in production, default`false, no quote around true or false
- `corsurl` set to server url if using cors with localhost development, such as `corsurl: https://example.com`
- `formpath`: is the 'script path' and must be set, such as `formpath: /cgi-bin/mailform.cgi`

For localhost development it is common to set `corsurl`. However the cors server must allow cors.


## The two approaches for using forms

The two approaches that can be used for building forms with Minform are:

- A simplified abstraction that is easy for beginners to follow. This approach requires reused variables to be kept clean by resetting after use. Shown `contact.md`

- An example that shows more complex abstraction with convenient potential for more abstraction. This approach dramatically reduces number of variable names that need to be reset after use, by using rendering as soon as convenient. Shown in `contact2.md`.

For the first simpler approach above, it is easy to override or overwrite the configuration values above on a page by page or even within a page. If overwritten, either values should be set each time or old values should be preserved and used to reset site.yaml values. A useful concept is variables to be reused should be kept clean by resetting after use. This approach is shown code for `forms/contact.liquid` as variable names are reused.

For the second more abstract approach, these values can be overridden in frontmatter settings, as shown, and do not overwrite site.yaml values.


## Background

There is no need to use a traditional script path showing an apparent directory and apparent script file for `formpath`. This naming style is used in the example for compatibility with many usage examples that expect a CGI specification, which is increasingly uncommon, not necessary and not recommended.

Examples should be provided of various backend server approaches, including scipt CGI, Node Express, Node framework, PHP, Python, Perl PSGI direct, Perl PSGI framework, Perl CGI, FastCGI. Also, examples of configuration for Nginx should be provided for both FastCGI and reverse proxy.

For example, the Perl PSGI specification is flexible enough to allow an app to appear to be a CGI app when it is not (using a reverse proxied persistent PSGI process) or to actually work as a CGI script even though when it is written as a PSGI persistent app. In fact, reverse proxy solutions are now so common it is now common that if a traditional CGI approach is used then FastCGI, a persistent non CGI process, is itself used to launch non persistent CGI scripts, such as for Nginx which cannot launch CGI scripts.
