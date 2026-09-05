export const cn = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(' ');

export const sanitizeText = (value?: string) => {
  if (!value) return '';
  return value.replace(/[<>]/g, '').replace(/\s{3,}/g, '  ').trim();
};

export const formatNumber = (value: number) => new Intl.NumberFormat('en-IN').format(value);

export const absoluteUrl = (path = '') => {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://futurextrade.com';
  return new URL(path, base).toString();
};
