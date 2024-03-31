<script setup>
import { mdiGithub } from '@mdi/js'
import BaseButton from '@/components/BaseButton.vue'
import SectionBanner from '@/components/SectionBanner.vue'
import { gradientBgPinkRed } from '@/colors'
</script>

<template>
  <SectionBanner :class="gradientBgPinkRed">
    <h1 class="text-3xl text-white mb-6">Sistema de Gestão de Pessoas com controle de acesso por cargo</h1>
    <div>
      <BaseButton
        href="https://github.com/lucas1221/PruvoChallenge"
        :icon="mdiGithub"
        label="GitHub"
        target="_blank"
        rounded-full
      />
    </div>
  </SectionBanner>
</template>
