type LogContext = Record<string, unknown>;

const safeContext = (context?: LogContext) => {
  if (!context) return undefined;
  const blocked = new Set(['password', 'privateKey', 'credentials', 'authorization']);
  return Object.fromEntries(Object.entries(context).filter(([key]) => !blocked.has(key)));
};

export const logger = {
  info(message: string, context?: LogContext) {
    console.info(JSON.stringify({ level: 'info', message, ...safeContext(context), time: new Date().toISOString() }));
  },
  error(message: string, context?: LogContext) {
    console.error(JSON.stringify({ level: 'error', message, ...safeContext(context), time: new Date().toISOString() }));
  }
};
