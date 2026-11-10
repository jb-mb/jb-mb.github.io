---
layout: layouts/base.njk
title: Videos
---

<main class="page-content videos-page">
  <header class="page-heading">
    <p class="eyebrow">Watch and learn</p>
    <h1>Linux, made a little easier.</h1>
    <p class="page-deck">Browse beginner-friendly walkthroughs, distro tours, and practical guides from the Matching Brackets channel.</p>
  </header>

  {% assign featured = videos | first %}
  <section class="featured-video">
    <a class="featured-video-image" href="{{ featured.url }}" target="_blank" rel="noopener noreferrer">
      <img src="{{ featured.thumbnail }}" alt="Thumbnail for {{ featured.title }}">
      <span class="play-badge" aria-hidden="true">▶</span>
    </a>
    <div class="featured-video-copy">
      <p class="eyebrow">Latest video</p>
      <h2>{{ featured.title }}</h2>
      <p>{{ featured.description }}</p>
      <a class="button-link" href="{{ featured.url }}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
    </div>
  </section>

  <section class="video-library">
    <div class="section-heading">
      <div><p class="eyebrow">From the channel</p><h2>More videos</h2></div>
      <a href="https://www.youtube.com/@MatchingBrackets" target="_blank" rel="noopener noreferrer">Visit the channel →</a>
    </div>
    <div class="video-grid">
      {% for video in videos %}
        {% unless forloop.first %}
        <article class="video-card">
          <a class="video-card-image" href="{{ video.url }}" target="_blank" rel="noopener noreferrer">
            <img src="{{ video.thumbnail }}" alt="Thumbnail for {{ video.title }}" loading="lazy">
          </a>
          <div class="video-card-copy">
            <h3><a href="{{ video.url }}" target="_blank" rel="noopener noreferrer">{{ video.title }}</a></h3>
            <p>{{ video.description }}</p>
          </div>
        </article>
        {% endunless %}
      {% endfor %}
    </div>
  </section>
</main>
