<template>
  <div class="panel log-panel">
    <div class="log-header">
      <h3>Журнал подій</h3>
      <button 
        class="btn btn-outline" 
        :disabled="activityLog.length === 0"
        @click="clearLog"
      >
        Очистити
      </button>
    </div>
    
    <div v-if="activityLog.length > 0" class="log-content">
      <div v-for="entry in activityLog" :key="entry.id" class="log-entry">
        <span class="log-time">{{ entry.time }}</span>
        <span :class="['log-badge', `badge-${entry.type}`]">{{ entry.type.toUpperCase() }}</span>
        <span class="log-message">{{ entry.message }}</span>
      </div>
    </div>
    <p v-else class="log-empty">Журнал порожній.</p>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '../composables/useNotifications';

const { activityLog, clearLog } = useNotifications();
</script>

<style scoped>
.panel { background: #ffffff; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 1.5rem; }
.log-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.log-header h3 { margin: 0; padding: 0; }
.btn { padding: 0.4rem 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-outline { background: transparent; border: 1px solid #34495e; color: #34495e; }
.log-content { display: flex; flex-direction: column; gap: 0.5rem; max-height: 400px; overflow-y: auto; }
.log-entry { font-family: monospace; background: #f9f9f9; padding: 0.5rem; border-radius: 4px; display: flex; gap: 0.5rem; align-items: center; }
.log-time { color: #888; }
.log-badge { font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; color: white; font-weight: bold; }
.badge-info { background: #3498db; }
.badge-success { background: #2ecc71; }
.badge-warning { background: #f39c12; }
.badge-error { background: #e74c3c; }
.log-empty { color: #888; font-style: italic; }
</style>