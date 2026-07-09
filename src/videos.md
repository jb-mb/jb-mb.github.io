---
layout: layouts/base.njk
title: Videos
---

<div align="center">
    <img src="/assets/img/abstract.jpg" style="width: 100%; height: 300px; background-position: cover; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;">
</div>

<h2>Videos</h2>

{% for video in videos %}
<section class="video-item">
    <div class="video-thumbnail">
        <img src="{{ video.thumbnail }}">
    </div>
    <div class="video-info">
        <div class="video-title">
            <h3>{{ video.title }}</h3>
            <p><em>{{ video.description }}</em></p>
            <a href="{{ video.url }}" target="_blank">Watch On YouTube</a>
        </div>
    </div>
</section>
{% endfor %}



