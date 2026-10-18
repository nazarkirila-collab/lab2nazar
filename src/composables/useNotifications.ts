import { ref } from 'vue';
import type { NotificationType, Toast, LogEntry } from '../types';

const activeToasts = ref<Toast[]>([]);
const activityLog = ref<LogEntry[]>([]);

export function useNotifications() {
  const addNotification = (message: string, type: NotificationType) => {
    const id = crypto.randomUUID();
    const timeString = new Date().toLocaleTimeString('uk-UA', { hour12: false });

    activityLog.value.push({ id, time: timeString, message, type });

    const toast: Toast = { id, message, type };
    activeToasts.value.push(toast);

    const timerId = window.setTimeout(() => {
      removeNotification(id);
    }, 4000);

    toast.timerId = timerId;
  };

  const removeNotification = (id: string) => {
    const index = activeToasts.value.findIndex(t => t.id === id);
    if (index !== -1) {
      const toast = activeToasts.value[index];
      if (toast.timerId) {
        window.clearTimeout(toast.timerId);
      }
      activeToasts.value.splice(index, 1);
    }
  };

  const clearLog = () => {
    activityLog.value = [];
  };

  return {
    activeToasts,
    activityLog,
    addNotification,
    removeNotification,
    clearLog
  };
}