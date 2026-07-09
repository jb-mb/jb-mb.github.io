---
layout: layouts/base.njk
title: Tags
---

<div align="center">
    <img src="/assets/img/abstract.jpg" style="width: 100%; height: 300px; background-position: center; background-repeat: no-repeat; background-size: cover;">
</div>

# Tags

<ul>

{% assign tags = "" | split: "," %}

{% for post in collections.all %}

{% for tag in post.data.tags %}

{% unless tag == "posts" %}

{% assign tags = tags | push: tag %}

{% endunless %}

{% endfor %}

{% endfor %}

{% assign tags = tags | uniq | sort %}

{% for tag in tags %}

<li>
    <a href="/tags/{{ tag | downcase }}/">{{ tag }}</a>
</li>

{% endfor %}

</ul>