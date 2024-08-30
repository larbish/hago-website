<template>
  <ULandingSection class="!pt-0">
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe
        :src="url"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
      />
    </div>
  </ULandingSection>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>
