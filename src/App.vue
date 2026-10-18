<template>
  <div class="app-layout">
    <header class="header">
      <h1>Notification Hub</h1>
      <p>Студент: Назар Кирила (АТ-251) | Варіант 2</p>
    </header>

    <main class="main-content">
      <div class="grid-layout">
        <div class="triggers-column">
          <CustomNotificationForm />
          <QuickActions />
        </div>
        <div class="log-column">
          <ActivityLog />
        </div>
      </div>
    </main>

    <NotificationContainer />
  </div>
</template>

<script setup lang="ts">
import CustomNotificationForm from './components/CustomNotificationForm.vue';
import QuickActions from './components/QuickActions.vue';
import ActivityLog from './components/ActivityLog.vue';
import NotificationContainer from './components/NotificationContainer.vue';
</script>

<style>
body { margin: 0; font-family: sans-serif; background-color: #f4f6f8; color: #2c3e50; }
.app-layout { max-width: 1200px; margin: 0 auto; padding: 2rem; }
.header { text-align: center; margin-bottom: 2rem; }
.grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
</style>