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
  label: 'Co-productions',
  to: '/coproduction'
}, {
  label: 'Team',
  to: '/team'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <div class="flex items-center">
        <NuxtImg
          src="logo.png"
          alt="Logo Full Have A Good One"
          width="50"
        />
        <UBadge
          label="Have A Good One"
          variant="subtle"
          class="mb-0.5"
        />
      </div>
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template>
  </UHeader>
</template>
