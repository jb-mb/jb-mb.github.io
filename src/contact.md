---
layout: layouts/base.njk
title: Contact
---

<main class="page-content contact-page">
  <header class="page-heading">
    <p class="eyebrow">Get in touch</p>
    <h1>I’d love to hear from you.</h1>
    <p class="page-deck">Have a video idea, a kind word, or a question about the site? Drop me a note.</p>
  </header>

  <div class="contact-layout">
    <section class="contact-form-panel">
      <h2>Send a message</h2>
      <p>Share a suggestion for a future video or just say hello. I’m not set up to provide Linux troubleshooting, so I may not be able to respond to those requests.</p>
      <form action="https://formspree.io/f/meebwebz" method="POST">
        <label for="contact-name">Your name</label>
        <input id="contact-name" type="text" name="name" autocomplete="name" required>
        <label for="contact-email">Your email address</label>
        <input id="contact-email" type="email" name="email" autocomplete="email" required>
        <label for="contact-message">Your message</label>
        <textarea id="contact-message" name="message" rows="6" required></textarea>
        <button class="formbtn" type="submit">Send message</button>
      </form>
    </section>

    <aside class="contact-links">
      <img src="/assets/img/contact.jpg" alt="Two rotary telephones">
      <h2>Find me elsewhere</h2>
      <p>You can also leave a comment on a video or find the website’s source code on GitHub.</p>
      <ul>
        <li><a href="https://www.youtube.com/@MatchingBrackets" target="_blank" rel="noopener noreferrer">Matching Brackets on YouTube</a></li>
        <li><a href="https://github.com/jb-mb" target="_blank" rel="noopener noreferrer">Matching Brackets on GitHub</a></li>
      </ul>
    </aside>
  </div>
</main>
