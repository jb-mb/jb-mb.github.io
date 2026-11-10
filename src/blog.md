---
layout: layouts/base.njk
title: The Journal
---

<main class="page-content journal-page">
  <header class="page-heading">
    <p class="eyebrow">Matching Brackets Journal</p>
    <h1>Notes on Linux, learning, and technology.</h1>
    <p class="page-deck">Video companions, beginner-friendly guides, and occasional thoughts from behind the keyboard.</p>
  </header>

  {% assign posts = collections.posts | sort: "date" | reverse %}
  {% assign featured = posts | first %}
  <div class="journal-layout">
    <div class="journal-main">
      <section class="journal-featured">
        <a class="journal-featured-image" href="{{ featured.url }}">
          <img src="{{ featured.data.image }}" alt="{{ featured.data.imageAlt }}">
        </a>
        <div class="journal-featured-copy">
          <p class="eyebrow">Featured story · {{ featured.date | dateDisplay }}</p>
          <h2><a href="{{ featured.url }}">{{ featured.data.title }}</a></h2>
          <p>{{ featured.templateContent | strip_html | strip_newlines | truncate: 240 }}</p>
          <a class="button-link" href="{{ featured.url }}">Read the story</a>
        </div>
      </section>

      <section class="journal-latest">
        <div class="section-heading"><div><p class="eyebrow">The archive</p><h2>Latest articles</h2></div></div>
        <div class="article-list">
          {% for post in posts %}
            {% unless forloop.first %}
            <article class="article-card">
              <a class="article-card-image" href="{{ post.url }}">
                <img src="{{ post.data.image }}" alt="{{ post.data.imageAlt }}" loading="lazy">
              </a>
              <div class="article-card-copy">
                <p class="article-date">{{ post.date | dateDisplay }}</p>
                <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
                <p>{{ post.templateContent | strip_html | strip_newlines | truncate: 190 }}</p>
                <a class="text-link" href="{{ post.url }}">Continue reading →</a>
              </div>
            </article>
            {% endunless %}
          {% endfor %}
        </div>
      </section>
    </div>

    {% include "blog-sidebar.njk" %}
  </div>
</main>
