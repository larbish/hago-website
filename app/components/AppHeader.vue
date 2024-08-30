<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Scripted',
  to: '/scripted'
}, {
  label: 'Documentary',
  to: '/documentary'
}, {
  label: 'Team',
  to: '/team'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      HAGO <UBadge
        label="Have A Good One"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template>
  </UHeader>
</template>
