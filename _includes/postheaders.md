# {{ title }}

## {{ description }}

{% displayDate date %}

{% for tag in tags %}
[{{- tag -}}]{%- unless forloop.last -%}, {%- endunless -%}
{% endfor %}

{{ content }}
