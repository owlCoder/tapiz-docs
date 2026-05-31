<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <section class="tapiz-hero" aria-labelledby="tapiz-portal-title">
    <div class="tapiz-hero__inner">
      <div class="tapiz-badge">
        <strong>Tapiz Docs</strong>
        <span>One portal. Two audiences. Clear separation.</span>
      </div>

      <h1 id="tapiz-portal-title">Tapiz documentation <span>for teams and users.</span></h1>

      <p class="tapiz-lead">
        A unified documentation portal for the Tapiz platform. Technical teams can use the API and engineering documentation, while end users can follow a dedicated product manual written in plain English.
      </p>

      <div class="tapiz-cards" aria-label="Documentation sections">
        <a class="tapiz-card" :href="withBase('/api/')">
          <span class="tapiz-card__kicker">Technical documentation</span>
          <h2>API Docs</h2>
          <p>
            REST API reference, authentication guidance, integration notes, architecture overview and operational documentation for engineering and integration teams.
          </p>
          <span class="tapiz-card__footer">Open API docs →</span>
        </a>

        <a class="tapiz-card" :href="withBase('/manual/')">
          <span class="tapiz-card__kicker">End-user documentation</span>
          <h2>User Manual</h2>
          <p>
            Role-based product guide for students, assistants, faculty managers and super administrators, focused on real workflows and platform usage.
          </p>
          <span class="tapiz-card__footer">Open user manual →</span>
        </a>
      </div>
    </div>
  </section>
</template>
