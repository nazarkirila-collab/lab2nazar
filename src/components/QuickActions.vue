<template>
  <div class="panel">
    <h3>Системні події</h3>
    <div class="action-buttons">
      <button class="btn btn-success" @click="triggerSuccess">💾 Зберегти файл</button>
      <button class="btn btn-error" @click="triggerError">🔌 Втрата зв'язку</button>
      <button class="btn btn-info" @click="triggerInfo">✉️ Новий лист</button>
      <button class="btn btn-warning" @click="triggerWarning">🔋 Низький заряд</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '../composables/useNotifications';

const { addNotification } = useNotifications();

const triggerSuccess = () => addNotification('Файл успішно збережено!', 'success');
const triggerError = () => addNotification('Втрачено зв\'язок із сервером.', 'error');
const triggerInfo = () => addNotification('Синхронізацію завершено.', 'info');
const triggerWarning = () => addNotification('Залишилося 10% заряду батареї.', 'warning');
</script>

<style scoped>
.panel { background: #ffffff; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 1.5rem; }
h3 { margin-top: 0; border-bottom: 2px solid #f4f6f8; padding-bottom: 0.5rem; }
.action-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.btn { padding: 0.8rem 1rem; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; transition: opacity 0.2s; }
.btn:hover:not(:disabled) { opacity: 0.8; }
.btn-success { background: #2ecc71; color: white; }
.btn-error { background: #e74c3c; color: white; }
.btn-info { background: #3498db; color: white; }
.btn-warning { background: #f39c12; color: white; }
</style>