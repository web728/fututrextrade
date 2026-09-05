'use client';

import { Search, Filter, RefreshCw, Layers } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Exhibition } from '@/types/exhibition';
import { ExhibitionCard } from './ExhibitionCard';

const unique = (values: string[]) => ['All', ...Array.from(new Set(values))];

export function ExhibitionFilters({ events }: { events: Exhibition[] }) {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('All');
  const [country, setCountry] = useState('All');
  const [city, setCity] = useState('All');
  const [industry, setIndustry] = useState('All');
  const [eventType, setEventType] = useState('All');
  const [status, setStatus] = useState('Upcoming');
  const reducedMotion = useReducedMotion();

  const years = unique(events.map((event) => String(event.year)));
  const countries = unique(events.map((event) => event.country));
  const cities = unique(events.map((event) => event.city));
  const industries = unique(events.map((event) => event.industry));
  const eventTypes = unique(events.map((event) => event.eventType));

  const resetFilters = () => {
    setQuery('');
    setYear('All');
    setCountry('All');
    setCity('All');
    setIndustry('All');
    setEventType('All');
    setStatus('Upcoming');
  };

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return events.filter((event) => {
      const matchesQuery =
        !normalized ||
        [event.title, event.city, event.country, event.industry].some(
          (value) => value && value.toLowerCase().includes(normalized)
        );
      return (
        matchesQuery &&
        (year === 'All' || String(event.year) === year) &&
        (country === 'All' || event.country === country) &&
        (city === 'All' || event.city === city) &&
        (industry === 'All' || event.industry === industry) &&
        (eventType === 'All' || event.eventType === eventType) &&
        (status === 'All' || event.status === status)
      );
    });
  }, [city, country, eventType, events, industry, query, status, year]);

  return (
    <div className="space-y-8">
      {/* Filter Toolbar Container */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50">
        
        {/* Top Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search size={20} />
          </div>
          <input
            id="exhibition-search"
            type="text"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Search exhibitions by title, city, country, or industry..."
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E3131B]/30 focus:border-[#E3131B] transition-all"
          />
        </div>

        {/* Multi-Select Filter Options Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <FilterSelect label="Year" value={year} onChange={setYear} options={years} />
          <FilterSelect label="Country" value={country} onChange={setCountry} options={countries} />
          <FilterSelect label="City" value={city} onChange={setCity} options={cities} />
          <FilterSelect label="Industry" value={industry} onChange={setIndustry} options={industries} />
          <FilterSelect label="Event Type" value={eventType} onChange={setEventType} options={eventTypes} />
          <FilterSelect label="Status" value={status} onChange={setStatus} options={['All', 'Upcoming', 'Completed']} />
        </div>

        {/* Filter Summary & Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E3131B]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
              Showing <strong className="text-slate-900 font-extrabold">{filtered.length}</strong> Trade Exhibitions
            </span>
          </div>

          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#E3131B] transition-colors"
          >
            <RefreshCw size={13} />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>

      {/* Exhibitions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((event) => (
            <motion.div
              layout={!reducedMotion}
              key={event.slug}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
            >
              <ExhibitionCard event={event} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-20 px-6 rounded-3xl bg-white border border-slate-200">
          <Layers className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">No Exhibitions Found</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
            No exhibitions match your current filter selection. Try broadening your query or clearing filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-xl bg-[#E3131B] text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-900 transition-colors shadow-md"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-1.5">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#E3131B]/30 focus:border-[#E3131B] transition-all cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}