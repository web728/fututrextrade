'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronRight, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { company } from '@/data/company';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/exhibitions', label: 'Exhibitions' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/global-presence', label: 'Global Presence' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Media' },
  { href: '/contact', label: 'Contact' }
];

const mobileNavVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.08
    }
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function Header() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const companyLogo = (company as any)?.assets?.logo;
  const companyName = (company as any)?.name || (company as any)?.legalName || "Futurex Trade Fair and Events";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 select-none ${
          scrolled 
            ? 'bg-[#050c18]/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.85)]' 
            : 'bg-gradient-to-b from-[#03070f] via-[#03070f]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0" aria-label="Futurex Home">
          
              <div className="relative h-9 w-32 sm:w-36 transition-transform duration-200 group-hover:scale-98">
                <Image 
                  src={companyLogo} 
                  alt={companyName} 
                  fill
                  priority 
                  sizes="170px"
                  className="object-contain object-left filter brightness-125 drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]"
                />
              </div>
           
          </Link>

          {/* Desktop Navigation Capsule with Pure White Text & Animated Red Underline */}
          <nav 
            className="hidden lg:flex items-center gap-1 text-white bg-white/[0.08] border border-white/15 px-3 py-1.5 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const currentPath = pathname || '';
              const isActive = currentPath === item.href || currentPath.startsWith(`${item.href}/`);
              
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="group relative px-3.5 py-1.5 text-[12.5px] font-heading font-extrabold uppercase tracking-wider text-white transition-colors duration-300"
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover & Active Animated Red Underline */}
                  <span 
                    className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[var(--color-red)] rounded-full transition-all duration-300 transform origin-left shadow-[0_0_8px_rgba(227,19,27,0.8)] ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <Link 
              href="/participants#exhibitor"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-red)] text-white text-xs font-heading font-black uppercase tracking-wider hover:bg-[var(--color-red-deep)] transition-all duration-300 shadow-[0_4px_24px_rgba(227,19,27,0.55)] hover:shadow-[0_6px_28px_rgba(227,19,27,0.75)] hover:-translate-y-0.5 rounded-full active:scale-95"
            >
              <span>Exhibit With Us</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              type="button"
              onClick={() => setMenuOpen(true)} 
              aria-expanded={menuOpen} 
              aria-controls="mobile-menu" 
              aria-label="Open navigation menu" 
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors rounded-full active:scale-95 shadow-md"
            >
              <Menu size={20} className="stroke-[2.5]" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={reducedMotion ? undefined : mobileNavVariants}
            className="fixed inset-0 z-[120] bg-[#050c18]/98 text-white backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex justify-between items-center pb-6 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-red)] animate-pulse" />
                  <span className="font-mono text-xs font-black tracking-[0.22em] text-white uppercase">
                    FUTUREX PLATFORMS // DIRECTORY
                  </span>
                </div>

                <button 
                  type="button"
                  onClick={() => setMenuOpen(false)} 
                  aria-label="Close menu" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[var(--color-red)] hover:border-[var(--color-red)] transition-all active:scale-95 shadow-md"
                >
                  <X size={20} className="stroke-[2.5]" />
                </button>
              </div>

              <nav aria-label="Mobile navigation" className="flex flex-col mt-6 divide-y divide-white/10">
                {navItems.map((item, index) => {
                  const currentPath = pathname || '';
                  const isActive = currentPath === item.href || currentPath.startsWith(`${item.href}/`);

                  return (
                    <motion.div key={item.href} variants={reducedMotion ? undefined : mobileItemVariants}>
                      <Link 
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between py-4 group transition-colors ${
                          isActive ? 'text-[var(--color-red)]' : 'text-white hover:text-[var(--color-red)]'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-black text-slate-400 group-hover:text-[var(--color-red)] transition-colors">
                            // 0{index + 1}
                          </span>
                          <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-[var(--color-red)] transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight size={20} className="text-white/60 group-hover:text-[var(--color-red)] group-hover:translate-x-1.5 transition-all" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <motion.div 
              variants={reducedMotion ? undefined : mobileItemVariants}
              className="relative z-10 pt-8 mt-6 border-t border-white/15 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link 
                  href="/participants#exhibitor" 
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-4 bg-[var(--color-red)] text-white text-xs font-heading font-black uppercase tracking-wider text-center shadow-xl hover:bg-[var(--color-red-deep)] transition-all rounded-full"
                >
                  Become An Exhibitor
                </Link>
                <Link 
                  href="/participants#visitor" 
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-4 bg-white/10 border border-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider text-center hover:bg-white/20 transition-all rounded-full"
                >
                  Plan Your Visit
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-200 pt-2">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[var(--color-red)]" />
                  <span className="text-white font-bold">+91-11-4053-8400</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-sky-400" />
                  <span className="text-white font-bold">admin@futurextrade.com</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;