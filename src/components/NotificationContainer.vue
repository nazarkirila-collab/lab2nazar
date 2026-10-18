<template>
  <div class="toast-container">
    <TransitionGroup name="toast-list">
      <ToastMessage
        v-for="toast in activeToasts"
        :key="toast.id"
        :toast="toast"
        @close="removeNotification(toast.id)"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '../composables/useNotifications';
import ToastMessage from './ToastMessage.vue';

const { activeToasts, removeNotification } = useNotifications();
</script>

<style scoped>
.toast-container { position: fixed; top: 20px; right: 20px; width: 350px; display: flex; flex-direction: column; gap: 10px; z-index: 9999; }
.toast-list-enter-active, .toast-list-leave-active { transition: all 0.3s ease; }
.toast-list-enter-from { opacity: 0; transform: translateX(50px); }
.toast-list-leave-to { opacity: 0; transform: translateX(50px); }
.toast-list-leave-active { position: absolute; width: 100%; }
</style>