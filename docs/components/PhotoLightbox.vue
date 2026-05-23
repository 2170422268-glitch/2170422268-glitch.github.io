<template>
  <Teleport to="body">
    <div v-if="visible" class="lightbox-overlay" @click.self="close">
      <button class="lightbox-close" @click="close">&times;</button>
      <button class="lightbox-nav lightbox-prev" @click="prev" :disabled="isFirst">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="lightbox-nav lightbox-next" @click="next" :disabled="isLast">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div class="lightbox-content">
        <img :src="currentPhoto?.src" :alt="currentPhoto?.alt" class="lightbox-image" />
        <div class="lightbox-info">
          <span class="lightbox-counter">{{ currentIndex + 1 }} / {{ photos.length }}</span>
          <p v-if="currentPhoto?.caption" class="lightbox-caption">{{ currentPhoto.caption }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visible: Boolean,
  photos: { type: Array, default: () => [] },
  currentIndex: { type: Number, default: 0 }
})

const emit = defineEmits(['close', 'update:currentIndex'])

const currentPhoto = computed(() => props.photos[props.currentIndex] || null)
const isFirst = computed(() => props.currentIndex <= 0)
const isLast = computed(() => props.currentIndex >= props.photos.length - 1)

function close() { emit('close') }
function prev() { if (!isFirst.value) emit('update:currentIndex', props.currentIndex - 1) }
function next() { if (!isLast.value) emit('update:currentIndex', props.currentIndex + 1) }

function handleKeydown(e) {
  if (!props.visible) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>
