'use client';

import { Loader2, Send } from 'lucide-react';

interface SubmitButtonProps {
  loading: boolean;
  label?: string;
}

export function SubmitButton({ loading, label = 'Send Enquiry' }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E3131B] hover:bg-[#c80f16] text-white text-xs font-mono font-black tracking-[0.2em] uppercase rounded-xl transition-all duration-300 shadow-md shadow-[#E3131B]/20 hover:shadow-lg hover:shadow-[#E3131B]/35 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>PROCESSING...</span>
        </>
      ) : (
        <>
          <span>{label}</span>
          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </>
      )}
    </button>
  );
}