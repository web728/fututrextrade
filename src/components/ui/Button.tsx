import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'red' | 'ghost' | 'dark' | 'text';
  className?: string;
}

export function Button({ href, children, variant = 'red', className }: ButtonProps) {
  return (
    <Link className={cn('button', `button--${variant}`, className)} href={href}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} />
    </Link>
  );
}
