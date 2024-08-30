<script setup lang="ts">
const links = [{
  label: 'Have a good one',
  children: [{
    label: 'Bureau 158 Bd Pereire, 75017 Paris',
    to: 'https://www.google.com/maps/place/158+Bd+Pereire,+75017+Paris/@48.8830574,2.2904264,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f919cb4546f:0xcd917b622c314d3f!8m2!3d48.8830539!4d2.2930067!16s%2Fg%2F11bw4bf4c7?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D',
    target: '_blank'
  }, {
    label: 'Fiscal 23 Rue des Jeuneurs, 75002 Paris',
    to: 'https://www.google.com/maps/place/158+Bd+Pereire,+75017+Paris/@48.8830574,2.2904264,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f919cb4546f:0xcd917b622c314d3f!8m2!3d48.8830539!4d2.2930067!16s%2Fg%2F11bw4bf4c7?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D',
    target: '_blank'
  }, {
    label: 'Contactez nous',
    to: 'mailto:carla@hago.paris',
    target: '_blank'
  }]
}, {
  label: 'Downloads',
  children: [{
    label: 'Line Up 2024',
    to: 'line-up-2024.pdf',
    as: 'a',
    target: '_blank'
  }]
}]
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #left>
          <NuxtImg
            src="logo-full.webp"
            alt="Logo Full Have A Good One"
            width="240"
            height="120"
          />
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>
  </UFooter>
</template>
