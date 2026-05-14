# {{ title }}

## {{ description }}

{{ date | displayDate }}

{% for tag in tags %}
[{{- tag -}}]{%- unless forloop.last -%}, {%- endunless -%}
{% endfor %}

{{ content }}
