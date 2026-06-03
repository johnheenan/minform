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








## Basic Topics

### Editing locally
- TBD


### Updating after editing locally
 
- Using rsync


### Using Git
- Not required
- TBD






## Advanced Topics


### Using CI/CD to update site automatically
- Setup to allow automatic site update triggered by a push (save to non local Git repository) using CI/CD (Continuous Integration/Continuous Delivery and/or Deployment)
- TBD


### Setting up live site editing as a CMS with no local repository
- [Sveltia CMS]( https://sveltiacms.app/en/) is included. Behind the scenes, uses GitHub Actions (or actions with another GIT service provider), without exposure.
- TBD


### Making your own template
- Part of the first `git diff` for this template with template it was developed from can be viewed at [first diff](/diff).