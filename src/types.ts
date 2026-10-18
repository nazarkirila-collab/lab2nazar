export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Toast {
  id: string;
  message: string;
  type: NotificationType;
  timerId?: number;
}

export interface LogEntry {
  id: string;
  time: string;
  message: string;
  type: NotificationType;
}