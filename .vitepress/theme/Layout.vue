<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import TapizFooter from './TapizFooter.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <TapizFooter />
    </template>
  </Layout>
</template>
