<script setup lang="ts">
const links = [{
  label: 'Have A Good One',
  children: [{
    label: '158 bd Pereire 75017 Paris',
    to: 'https://www.google.com/maps/place/158+Bd+Pereire,+75017+Paris/@48.8830574,2.2904264,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f919cb4546f:0xcd917b622c314d3f!8m2!3d48.8830539!4d2.2930067!16s%2Fg%2F11bw4bf4c7?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D',
    target: '_blank'
  }, {
    label: 'Contact us',
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
            src="logo-full.png"
            alt="Logo Full Have A Good One"
          />
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UButton
        to="https://www.instagram.com/hago_tv/?locale=fr_FR&hl=en /"
        target="_blank"
        icon="i-simple-icons-instagram"
        aria-label="Instagram"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://fr.linkedin.com/company/have-a-good-one-hago?trk=ppro_cprof"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="Linkedin"
        color="gray"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
