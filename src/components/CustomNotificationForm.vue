<template>
  <div class="panel">
    <h3>Створити сповіщення</h3>
    <form @submit.prevent="submitForm" class="form-grid">
      <input 
        v-model="text" 
        type="text" 
        placeholder="Текст повідомлення..." 
        required 
        class="input-field"
      />
      <select v-model="selectedType" class="select-field">
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>
      <button type="submit" class="btn btn-primary">Надіслати</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNotifications } from '../composables/useNotifications';
import type { NotificationType } from '../types';

const { addNotification } = useNotifications();

const text = ref('');
const selectedType = ref<NotificationType>('info');

const submitForm = () => {
  if (text.value.trim()) {
    addNotification(text.value.trim(), selectedType.value);
    text.value = '';
  }
};
</script>

<style scoped>
.panel { background: #ffffff; border-radius: 8px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 1.5rem; }
h3 { margin-top: 0; border-bottom: 2px solid #f4f6f8; padding-bottom: 0.5rem; }
.form-grid { display: flex; flex-direction: column; gap: 1rem; }
.input-field, .select-field { padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; }
.btn { padding: 0.8rem 1rem; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; transition: opacity 0.2s; }
.btn:hover:not(:disabled) { opacity: 0.8; }
.btn-primary { background: #34495e; color: white; }
</style>