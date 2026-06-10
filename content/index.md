---
title: Main
description: site.description
eleventyComputed:
    summary: "{{ site.description }}"
---
# {{ site.title }}

## {{ summary }}

'My Site' on navbar on left and on top of page is taken from `title` in file `content/_data/site.yml`.

The description above is from `description` in the same file.

The footer can also be edited in the same file from `footer` and can be multiline.


## Developer UX philosophy

See [The Conditions the Developer UX Philosophy Escapes From](https://github.com/johnheenan/minform#the-conditions-the-developer-ux-philosophy-escapes-from)

## Templates


### Minform Base Template (This Site)

- [Minform](https://minform.hostfurl.com) base demonstration.
- Source of latest public release at [Minform Template](https://github.com/johnheenan/minform)
- This version is v{% npm_package_version %}, which may be same, behind or ahead of [latest public release](https://github.com/johnheenan/minform/releases/latest)


### Implemented Templates

#### Minformhf by Hostfurl

- [Minformhf](https://minformhf.hostfurl.com)  implmentation of Minform by Hostfurl
- Source of latest public release at [Minformhf by Hostfurl](https://github.com/hostfurl/minformhf)
- The demonstrated version may be same, behind or ahead of [latest public release](https://github.com/hostfurl/minformhf/releases/latest)


### Raise an issue to have your own implementation included


### Making your own template
- Part of the first `git diff` for this template with template it was developed from can be viewed at [first diff](/diff).

