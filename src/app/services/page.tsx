'use client';

import React from 'react';
import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users2, 
  CalendarCheck, 
  Palette, 
  Megaphone, 
  Video, 
  Building,
  Quote,
  CheckCircle2,
  Target,
  Compass,
  Heart,
  Award,
  ArrowRight
} from 'lucide-react';

import { PageHero } from '@/components/hero/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Testimonials } from '@/components/sections/Testimonials';

// ==================== DATA CONFIGURATION ====================
const services = [
  {
    id: 'exhibitions',
    icon: Building2,
    title: 'Exhibitions',
    description: 'Futurex Trade Fair & Events Pvt. Ltd. Has Always Been One Of The Leading Exhibition Stand Designers, Builders And Contractors In India And SAARC Countries And Also We Provide A Wide Range Of Display And Exhibition Services For All Our Exhibitions.'
  },
  {
    id: 'conferences',
    icon: Users2,
    title: 'Conferences',
    description: 'Conferences Are Usually Composed Of Various Presentations. They Tend To Be Short And Concise, With A Time Span Of About 10 To 30 Minutes. Presentations Are Usually Followed By A Discussion. The Work May Be Bundled In Written Form As Academic Papers And Published As The Conference Proceedings.'
  },
  {
    id: 'events',
    icon: CalendarCheck,
    title: 'Events',
    description: 'Creating And Implementing Purposeful Meetings/events Is Our Business! Planning With Deeper Meaning, Innovation, And Insight In Mind. Focusing On The Perfect Execution Of Logistics And Creating Memorable Moments That Engage, Inspire, And Create Long Lasting Positive Outcomes.'
  },
  {
    id: 'designing-studio',
    icon: Palette,
    title: 'Designing Studio',
    description: 'Futurex Studio Is A Part Of Futurex Group. It Has Been Offering Quality And The Most Creative Exhibition Stand Designing In Different Profiles. Our Mission Is To Approach Every Single Day Like It Will Be Our Defining Moment.'
  },
  {
    id: 'branding-promotions',
    icon: Megaphone,
    title: 'Branding & Promotions',
    description: 'Press Advertisements Marketing Strategies Like T.V & Radio, Multimedia Presentations, Internet Seminars & Press Conferences, Hoardings, Proposal Letters, Journals & E-mailers, Personal Contacts & Presentations, Banners & Posters, Website Development & Maintainance.'
  },
  {
    id: 'webinars',
    icon: Video,
    title: 'Webinars',
    description: 'The Future Of Online Experiences Is Here Today With The Ability To Stream / Webcast Your Live Events To Viewers Anywhere In The World. You Can Take Your Business To New Heights And Dimensions By Instantly Connecting With Millions Of People Across The World In Live And Real Time Environment.'
  }
];

const associationLogos = [
  { id: 1, name: 'BCCI (Bhutan Chamber)', sub: 'Bhutan Chamber of Commerce & Industry' },
  { id: 2, name: 'PHD Chamber', sub: 'PHD Chamber of Commerce' },
  { id: 3, name: 'CDC Events', sub: 'CDC Events & Travels' },
  { id: 4, name: 'ASK Trade', sub: 'ASK Trade & Exhibitions' },
  { id: 5, name: 'Alumex PLC', sub: 'Alumex Industries PLC' },
  { id: 6, name: 'JAT Holdings', sub: 'JAT Holdings Pvt. Ltd.' }
];

const testimonials = [
  {
    quote: "We Met Right Buyers & Create Business Opportunities In Futurex Expo . For Us The Futurex Exhibition Is Good For All Industry Sector",
    author: "Mr. Wasantha Gunaratne",
    role: "Director Sales & Technical - South Asia",
    company: "Jat Holdings Pvt. Ltd."
  },
  {
    quote: "We Want To Express Our Utmost Appreciation For A Fruitful Cooperation And Partnership With Working With Futurex Trade Fairs And Events Pvt. Ltd And Proved To Be A Testament Of Their Dedication To Discipline , Professionalism And Excellence.",
    author: "Ms. Deki Chhoden",
    role: "Head, Events And Resource Division",
    company: "Bhutan Chamber Of Commerce & Industry (BCCI)"
  },
  {
    quote: "We Want To Express Our Utmost Appreciation For A Fruitful Cooperation And Partnership With Futurex Trade Fair And Events Pvt. Ltd. The Organisation Proved To Be A Strong And Professional Partner.",
    author: "Mr. Imran Hasan",
    role: "Managing Director",
    company: "CDC Events and Travels"
  },
  {
    quote: "We Were Really Impressed With The Quality Of The Visitors Who Came In Exhibitions Organised By Futurex, Futurex Exhibitions Is An Ideal Platform For Indian Participants To Penetrate In Saarc Countries.",
    author: "Mr. Rakesh Kumar Sangrai",
    role: "Secretary - Intl Affairs, Intl Exhibitions",
    company: "PHD Chamber of Commerce"
  },
  {
    quote: "We have been participating in the Buildcon International Exhibitions in Bangladesh, Sri Lanka & Nepal since 2019 and getting a phenomenal response.",
    author: "Mr. Kalpesh Chitroda",
    role: "Regional Executive",
    company: "Maris Polymers"
  },
  {
    quote: "The Series Of Buildcon International Exhibitions Has Been A Very Productive Platform For Us. All The Arrangements Were Satisfactory.",
    author: "Mr. Sandeep Vachhani",
    role: "Director",
    company: "Elcon Fasteners"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative bg-slate-50 text-slate-900 min-h-screen overflow-hidden selection:bg-[#E3131B] selection:text-white">

      {/* ==================== 1. ORIGINAL PAGE HERO (LIGHT SECTION) ==================== */}
      <div className="bg-white border-b border-slate-200">
        <PageHero 
          eyebrow="SERVICES" 
          title={
            <>
              Business experiences,<br />
              <span className="text-[#E3131B]">built end to end.</span>
            </>
          } 
          description="Exhibitions, conferences, events, creative production, promotion and virtual business experiences." 
        />
      </div>

      {/* ==================== 2. OUR SERVICES GRID (LIGHT THEME) ==================== */}
      <section className="py-20 px-6 sm:px-8 max-w-[1280px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-[#E3131B] block mb-2">
            WHAT WE DO
          </span>
          <h2 className="font-heading font-black text-[32px] sm:text-[44px] text-slate-900 tracking-tight uppercase">
            Our <span className="text-[#E3131B]">Services</span>
          </h2>
          <p className="text-slate-600 text-[15px] mt-2 font-medium">
            Tailored trade show solutions, architecture, and marketing channels for global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#E3131B]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#E3131B]/10 border border-[#E3131B]/20 flex items-center justify-center text-[#E3131B] group-hover:bg-[#E3131B] group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-black text-[22px] text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 3. ASSOCIATIONS & ALLIANCES (LIGHT LOGO GRID) ==================== */}
      <section className="py-16 bg-slate-100/80 border-y border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="text-[11px] font-mono font-black tracking-[0.2em] uppercase text-[#E3131B] block mb-1">
              STRATEGIC ALLIANCES
            </span>
            <h2 className="font-heading font-black text-[28px] sm:text-[36px] text-slate-900 uppercase">
              Our Key <span className="text-[#E3131B]">Associations</span>
            </h2>
            <p className="text-slate-600 text-[14px] mt-1 font-medium">
              Proud partners and co-organizers with international chambers of commerce.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {associationLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="h-28 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center justify-center p-4 hover:border-[#E3131B] hover:shadow-md transition-all group text-center"
              >
                {/* Logo Image Placeholder Slot */}
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#E3131B] font-mono font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                  <Building className="w-5 h-5" />
                </div>
                <span className="text-[12px] font-bold text-slate-800 leading-tight block">
                  {logo.name}
                </span>
                <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                  {logo.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. DARK SECTION WITH DIAGONAL TRIANGLE FILL CUTOUT ==================== */}
      <section className="relative bg-slate-950 text-white pt-32 pb-24 my-16 overflow-hidden">
        
        {/* TOP DIAGONAL TRIANGLE CUTOUT WITH CONTRAST FILL (#E3131B Red Color Overlay) */}
        <div 
          className="absolute top-0 left-0 right-0 h-20 bg-slate-50 pointer-events-none z-20"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
          }}
        />
        <div 
          className="absolute top-0 left-0 right-0 h-20 bg-[#E3131B] pointer-events-none z-10"
          style={{
            clipPath: 'polygon(0 0, 100% 100%, 0 100%, 0 0)'
          }}
        />

        {/* Ambient Red Glow Lights */}
        <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] h-[500px] bg-[#E3131B]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-[#E3131B] block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-heading font-black text-[32px] sm:text-[42px] tracking-tight text-white uppercase">
              Guided By <span className="text-[#E3131B]">Purpose & Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl hover:border-[#E3131B]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#E3131B]/15 border border-[#E3131B]/30 flex items-center justify-center mb-6 text-[#E3131B]">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-black tracking-[0.2em] uppercase text-[#E3131B] block mb-2">
                MISSION
              </span>
              <p className="text-slate-300 text-[14px] leading-relaxed mb-4 font-medium">
                Organizing the largest number of specialized trade fairs and serving promising industries.
              </p>
              <ul className="space-y-2.5 pt-3 border-t border-slate-800">
                <li className="flex items-center gap-2 text-slate-300 text-[13px]">
                  <CheckCircle2 className="w-4 h-4 text-[#E3131B] shrink-0" />
                  <span>Market-driven show standards</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300 text-[13px]">
                  <CheckCircle2 className="w-4 h-4 text-[#E3131B] shrink-0" />
                  <span>SAARC Region expansion</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl hover:border-[#E3131B]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#E3131B]/15 border border-[#E3131B]/30 flex items-center justify-center mb-6 text-[#E3131B]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-black tracking-[0.2em] uppercase text-[#E3131B] block mb-2">
                VISION
              </span>
              <p className="text-slate-200 text-[15px] leading-relaxed font-semibold mb-4">
                To be the most trusted international trade fair orchestrator across South Asia.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-[13px] text-slate-300">
                Excel in high quality service delivery through trust, commitment, and perseverance.
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl hover:border-[#E3131B]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#E3131B]/15 border border-[#E3131B]/30 flex items-center justify-center mb-6 text-[#E3131B]">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-black tracking-[0.2em] uppercase text-[#E3131B] block mb-2">
                CORE VALUES
              </span>
              <div className="space-y-3">
                {['Business Ethics', 'Reliability', 'Customer Satisfaction'].map((val) => (
                  <div key={val} className="px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 text-[13px] font-bold flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#E3131B]" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DIAGONAL TRIANGLE CUTOUT */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-[#E3131B] pointer-events-none z-10"
          style={{
            clipPath: 'polygon(0 0, 100% 100%, 0 100%, 0 0)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-slate-50 pointer-events-none z-20"
          style={{
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'
          }}
        />
      </section>

      {/* ==================== 5. ASSOCIATES TESTIMONIALS (LIGHT SECTION) ==================== */}
      {/* <section className="py-20 px-6 sm:px-8 max-w-[1280px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-[#E3131B] block mb-2">
            CLIENT FEEDBACK
          </span>
          <h2 className="font-heading font-black text-[32px] sm:text-[42px] text-slate-900 uppercase">
            Our <span className="text-[#E3131B]">Associates Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#E3131B]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#E3131B]/40 mb-4" />
              <p className="text-slate-700 text-[14px] leading-relaxed italic mb-6 font-medium">
                "{item.quote}"
              </p>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-slate-900 font-bold text-[15px]">{item.author}</h4>
                <p className="text-[12px] text-[#E3131B] font-bold">{item.role}</p>
                <p className="text-[12px] text-slate-500 font-medium">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

        <Testimonials />

      {/* ==================== 6. CTA SECTION ==================== */}
      <CTASection />

    </main>
  );
}