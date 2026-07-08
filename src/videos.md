---
layout: layouts/base.njk
title: Videos
---

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



