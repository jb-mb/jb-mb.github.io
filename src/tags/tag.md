---
layout: layouts/base.njk
pagination:
  data: collections
  size: 1
  alias: tag
permalink: "/tags/{{ tag | downcase }}/"
---

# Posts tagged: {{ tag }}

<ul>

{% for post in collections.all %}

{% if post.data.tags contains tag %}

<li>
  <a href="{{ post.url }}">{{ post.data.title }}</a>
</li>

{% endif %}

{% endfor %}

</ul>