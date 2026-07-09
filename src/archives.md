---
layout: layouts/base.njk
title: Archives
---

<div align="center">
    <img src="/assets/img/abstract.jpg" style="width: 100%; height: 300px; background-position: cover; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;">
</div>

# Archives

<ul>

{% for post in collections.all %}

{% if post.url contains "/blog/" %}

<li>
<a href="{{ post.url }}">{{ post.data.title }}</a>
&mdash;
{{ post.date | date: "%B %d, %Y" }}
</li>

{% endif %}

{% endfor %}

</ul>