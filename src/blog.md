---
layout: layouts/base.njk
title: Blog
---

<div align="center">
    <img src="/assets/img/abstract.jpg" style="width: 100%; height: 300px; background-position: center; background-repeat: no-repeat; background-size: cover;">
</div>

# Blog

{% assign posts = collections.all | sort: "date" | reverse %}

<ul>

{% for post in collections.all reversed %}

{% if post.data.tags contains "posts" %}

<li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <br>
    {{ post.date | date: "%B %d, %Y" }}
</li>

{% endif %}

{% endfor %}

</ul>