interface Bucket {
  count: number;
  resetAt: number;
}

const globalStore = globalThis as typeof globalThis & { __futurexRateLimit?: Map<string, Bucket> };
const store = globalStore.__futurexRateLimit ?? new Map<string, Bucket>();
globalStore.__futurexRateLimit = store;

export const isRateLimited = (key: string) => {
  const max = Number(process.env.FORM_RATE_LIMIT_MAX || 6);
  const windowMs = Number(process.env.FORM_RATE_LIMIT_WINDOW_MS || 600000);
  const now = Date.now();
  const bucket = store.get(key);

  if (!bucket || bucket.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count += 1;
  store.set(key, bucket);
  return bucket.count > max;
};
