<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <footer class="tapiz-footer" aria-labelledby="tapiz-footer-title">
    <div class="tapiz-footer__grid">
      <section class="tapiz-footer__brand" aria-label="Tapiz brand">
        <a class="tapiz-footer__brand-row" :href="withBase('/')" aria-label="Tapiz Docs home">
          <img class="tapiz-footer__logo" :src="withBase('/logo.svg')" alt="" />
          <span id="tapiz-footer-title" class="tapiz-footer__name">Tapiz LMS</span>
        </a>

        <p class="tapiz-footer__tagline">
          Digital attendance and score tracking for educational institutions. Fast, precise, secure.
        </p>

        <a class="tapiz-footer__status" :href="withBase('/api/status')" aria-label="Open system status documentation">
          <span class="tapiz-footer__status-dot" aria-hidden="true"></span>
          <span>STATUS · OPERATIONAL</span>
        </a>
      </section>

      <nav class="tapiz-footer__nav" aria-label="Footer navigation">
        <section class="tapiz-footer__column">
          <h2>Product</h2>
          <a :href="withBase('/manual/')">
            <span class="tapiz-footer__icon" aria-hidden="true">▦</span>
            User Manual
          </a>
          <a :href="withBase('/manual/feature-gates')">
            <span class="tapiz-footer__icon" aria-hidden="true">✓</span>
            Feature Availability
          </a>
          <a :href="withBase('/manual/troubleshooting')">
            <span class="tapiz-footer__icon" aria-hidden="true">?</span>
            FAQ & Troubleshooting
          </a>
        </section>

        <section class="tapiz-footer__column">
          <h2>Access</h2>
          <a :href="withBase('/manual/account-access')">
            <span class="tapiz-footer__icon" aria-hidden="true">↳</span>
            Account Access
          </a>
          <a :href="withBase('/manual/student')">
            <span class="tapiz-footer__icon" aria-hidden="true">◌</span>
            Student Guide
          </a>
          <a :href="withBase('/manual/assistant')">
            <span class="tapiz-footer__icon" aria-hidden="true">+</span>
            Assistant Guide
          </a>
        </section>

        <section class="tapiz-footer__column">
          <h2>System</h2>
          <a :href="withBase('/api/')">
            <span class="tapiz-footer__icon" aria-hidden="true">◇</span>
            API Docs
          </a>
          <a :href="withBase('/reference/configuration')">
            <span class="tapiz-footer__icon" aria-hidden="true">□</span>
            Configuration Policy
          </a>
          <a :href="withBase('/CHANGELOG')">
            <span class="tapiz-footer__icon" aria-hidden="true">✎</span>
            Changelog
          </a>
        </section>
      </nav>
    </div>

    <div class="tapiz-footer__bottom">
      <span>© 2026 TAPIZ LABS · ALL RIGHTS RESERVED</span>
      <div class="tapiz-footer__legal" aria-label="Footer policies">
        <a :href="withBase('/reference/configuration')">Privacy & configuration</a>
        <a :href="withBase('/manual/troubleshooting')">Support</a>
        <span>ENCRYPTED · TLS 1.3</span>
      </div>
    </div>
  </footer>
</template>
