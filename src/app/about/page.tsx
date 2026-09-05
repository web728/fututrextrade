"use client";

import { motion, type Variants } from 'framer-motion';
import { PageHero } from '@/components/hero/PageHero';
import { StatsSection } from '@/components/sections/StatsSection';
import { GroupCompanies } from '@/components/sections/GroupCompanies';
import { CTASection } from '@/components/sections/CTASection';
import { company } from '@/data/company';
import { 
  Target, 
  Compass, 
  Heart, 
  Building, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Eye, 
  Zap, 
  CheckCircle2,
  ShieldCheck,
  Award,
  Globe2
} from 'lucide-react';
import PillarsSection from '@/components/sections/PillarsSection';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const strategicObjectives = [
  {
    title: "Enhanced Networking",
    desc: "Facilitating seamless interactions with potential buyers, creating fertile ground for valuable connections.",
    icon: Users
  },
  {
    title: "Elevated Brand Visibility",
    desc: "Amplifying brand recognition and resonance, steering businesses toward a prominent position in the market.",
    icon: TrendingUp
  },
  {
    title: "In-depth Industry Insights",
    desc: "Nurturing a culture of profound industry understanding by harnessing the wisdom of experts.",
    icon: Eye
  },
  {
    title: "Cost-effective Marketing",
    desc: "Providing judicious and pragmatic marketing guidance for optimum commercial impact and ROI.",
    icon: ShieldCheck
  },
  {
    title: "Instant Deal Closing",
    desc: "Enabling real-time negotiations, expediting decision-making processes, and swift deal closures on site.",
    icon: Zap
  },
  {
    title: "Expansive Platform",
    desc: "Furnishing a broad platform for brands to unveil their latest products to an engaged international audience.",
    icon: Globe2
  }
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen overflow-x-hidden">
      
      {/* 1. ATTACHED PAGE HERO (With Red Line & Title Props) */}
      <PageHero 
        eyebrow="ABOUT FUTUREX" 
        title={
          <>
            <span className="relative inline-block pb-1">
              International platforms
              {/* Red Line Underline Accent */}
              <span className="absolute bottom-0 left-0 w-full h-[4px] sm:h-[6px] bg-[#E3131B] rounded-full" />
            </span>
            <br />
            for <span className="text-[#E3131B]">business growth</span>.
          </>
        }
        tagline="Your Partner in Business Growth — Bringing the World to Your Business."
        description="Futurex Trade Fair and Events Private Limited is a prominent event management company offering a comprehensive suite of services to meet international business requirements."
      />

      {/* 2. Brand Story Section */}
      <section className="relative py-20 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <motion.div variants={fadeInVariants} className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#E3131B]" />
                <span className="text-[11px] font-mono font-black tracking-[0.2em] uppercase text-[#E3131B]">
                  SINCE {company.established}
                </span>
              </div>
              <h2 className="font-heading font-black text-[28px] sm:text-[36px] leading-[1.18] text-slate-900 tracking-[-0.03em] uppercase">
                Futurex Trade Fair & Events Pvt. Ltd.
              </h2>
              <p className="mt-4 text-[#E3131B] font-bold text-[18px]">
                Organizing high-impact international trade fairs & corporate exhibitions.
              </p>
            </motion.div>

            <motion.div variants={fadeInVariants} className="lg:col-span-7 space-y-5 text-slate-600 text-[15px] sm:text-[16px] leading-[1.75] font-medium">
              <p className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-800 font-medium border-l-4 border-l-[#E3131B] shadow-sm">
                Futurex Trade Fair and Events Private Limited is a prominent event management company offering a comprehensive suite of services. Our focus is providing business platforms designed to connect companies with potential buyers and industry professionals in a cost-effective and sustainable way.
              </p>
              <p>
                Our team of professionals is dedicated to comprehending the specific needs and interests of our clients, enabling customized solutions. We believe in multidimensional activities that make our exhibitions, seminars, corporate events, and get-togethers the most viable platforms for growth.
              </p>
              <p>
                At Futurex, we take pride in our professional approach and expert manpower, recognized by industry leaders as a secure investment for success. We bring together top manufacturers and global buyers.
              </p>
              <p className="pt-2 text-slate-900 font-bold text-[15px]">
                Whether you are a startup or an established enterprise, Futurex possesses the expertise to take your business to the next level.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    {/* ==================== 3. DIAGONAL CUTOUT PRINCIPLES (MISSION, VISION, VALUES) ==================== */}

    
      <PillarsSection/>






      {/* 4. Strategic Objectives Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-[#E3131B] block mb-2">
              EXCELLENCE IN EXECUTION
            </span>
            <h2 className="font-heading font-black text-[30px] sm:text-[40px] tracking-[-0.03em] text-slate-900">
              Our Strategic <span className="text-[#E3131B]">Aims & Objectives</span>
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {strategicObjectives.map((obj) => {
              const IconComponent = obj.icon;
              return (
                <motion.div 
                  key={obj.title}
                  variants={fadeInVariants}
                  className="group p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#E3131B]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E3131B] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E3131B] flex items-center justify-center mb-6 group-hover:bg-[#E3131B] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[18px] text-slate-900 mb-2 group-hover:text-[#E3131B] transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                    {obj.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Stats, Office Network, Companies & CTA */}
      <StatsSection />

      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 mb-10">
            <Building className="w-5 h-5 text-[#E3131B]" />
            <span className="text-[11px] font-mono font-black tracking-[0.25em] uppercase text-slate-900">
              INTERNATIONAL OFFICE NETWORK
            </span>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {company.offices.map((office, index) => (
              <motion.div 
                key={office}
                variants={fadeInVariants}
                className="group p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#E3131B]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <span className="text-[12px] font-mono font-bold text-[#E3131B] mb-4 block">
                  0{index + 1}
                </span>
                <strong className="text-[18px] font-bold text-slate-900 group-hover:text-[#E3131B] transition-colors">
                  {office}
                </strong>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GroupCompanies />
      <CTASection />

    </div>
  );
}