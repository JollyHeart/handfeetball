---
title: "Page Not Found"
permalink: 404.html
---

{% extends "layouts/base.njk" %}

{% block content %}
  <section class="text-center py-20">
    <h1 class="text-5xl font-bold text-red-600 mb-6">404</h1>
    <p class="text-xl mb-4">Oops! The page you are looking for does not exist.</p>
    <a href="/" class="text-blue-500 underline">Go back home</a>
  </section>
{% endblock %}