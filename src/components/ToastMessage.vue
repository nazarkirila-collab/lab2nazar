<template>
  <div :class="['toast', `toast-${toast.type}`]">
    <div class="toast-icon">{{ iconMap[toast.type] }}</div>
    <div class="toast-content">{{ toast.message }}</div>
    <button class="toast-close" @click="emit('close')">×</button>
  </div>
</template>

<script setup lang="ts">
import type { Toast } from '../types';

defineProps<{ toast: Toast }>();
const emit = defineEmits<{ (e: 'close'): void }>();

const iconMap: Record<Toast['type'], string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '🚨'
};
</script>

<style scoped>
.toast { display: flex; align-items: center; padding: 1rem; border-radius: 6px; color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
.toast-icon { margin-right: 12px; font-size: 1.2rem; }
.toast-content { flex-grow: 1; font-size: 0.95rem; line-height: 1.4; }
.toast-close { background: transparent; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0; opacity: 0.7; }
.toast-close:hover { opacity: 1; }
.toast-info { background-color: #3498db; }
.toast-success { background-color: #2ecc71; }
.toast-warning { background-color: #f39c12; color: #333; }
.toast-error { background-color: #e74c3c; }
</style>