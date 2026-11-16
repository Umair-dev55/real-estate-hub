import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCounter from '@/components/AnimatedCounter';
import LazyImage from '@/components/LazyImage';
import {
  companyInfo,
  teamMembers,
  achievements,
  statistics,
  testimonials,
} from '@/data/data.js';

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* ========================================================
          HERO BANNER
         ======================================================== */}
      <section className="bg-[#102a43] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#efc07a_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection variant="fadeDown">
            <span className="inline-block text-xs uppercase font-semibold tracking-[0.25em] text-[#efc07a] mb-3">
              ABOUT ZAMEEN ELITE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Pioneering Luxury Real Estate Across Pakistan
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              For over 16 years, we have set the benchmark in transparency, architectural
              distinction, and client dedication in Lahore, Islamabad, and Karachi.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================================
          STORY / HERITAGE SECTION
         ======================================================== */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visuals on Left */}
            <AnimatedSection variant="fadeRight" className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <LazyImage
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=700&fit=crop"
                  alt="Zameen Elite Architectural Heritage"
                  width={900}
                  height={700}
                  wrapperClassName="aspect-[9/7]"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#fdf8f0] text-[#c8922f] flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-bold text-[#102a43]">
                      16+ Years
                    </span>
                    <p className="text-xs text-gray-500 font-medium">
                      Excellence in Pakistani Real Estate
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Story Text on Right */}
            <AnimatedSection variant="fadeLeft" className="lg:col-span-6">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#c8922f] mb-3 block">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102a43] leading-tight mb-5">
                Redefining the Standard of Real Estate Advisory
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {companyInfo.longDescription}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our bespoke advisory model blends profound local market intelligence with
                international client management standards. We ensure complete legal due
                diligence, transparent title vetting, and maximum capital appreciation for your
                property investments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                {[
                  '100% Verified Legal Documentation',
                  'Exclusive Off-Market Properties',
                  'Dedicated Personal Consultant',
                  'End-to-End Transfer Facilitation',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#c8922f] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========================================================
          STATISTICS COUNTER SECTION
         ======================================================== */}
      <section className="bg-[#102a43] text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {statistics.map((stat) => (
              <div key={stat.id} className="text-center px-4 pt-4 sm:pt-0">
                <div className="font-serif text-3xl sm:text-5xl font-bold text-[#efc07a] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          ACHIEVEMENTS TIMELINE
         ======================================================== */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="container-custom">
          <SectionHeading
            label="RECOGNITION"
            title="Milestones & Achievements"
            subtitle="Honored for excellence in customer satisfaction, digital transformation, and luxury property transactions."
            centered
          />

          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((item) => (
              <StaggerItem
                key={item.id}
                className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fdf8f0] text-[#c8922f] text-xs font-bold mb-4">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#102a43] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          LEADERSHIP TEAM SECTION
         ======================================================== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            label="THE EXPERTS"
            title="Meet Our Leadership Team"
            subtitle="Seasoned veterans combining deep Pakistani market acumen with modern property consultation."
            centered
          />

          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <StaggerItem
                key={member.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <LazyImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-[#102a43]">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#c8922f] uppercase tracking-wider block mb-2">
                    {member.title}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          TESTIMONIALS SECTION
         ======================================================== */}
      <section className="py-20 bg-[#fdfbf7] border-y border-[#efc07a]/20">
        <div className="container-custom">
          <SectionHeading
            label="CLIENT VOICES"
            title="Trusted by Discerning Clients"
            subtitle="Read real stories from home buyers and corporate investors who partnered with Zameen Elite."
            centered
          />

          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <StaggerItem
                key={t.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#c8922f] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c8922f]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#efc07a]/40 mb-3" />
                  <p className="text-sm text-gray-600 leading-relaxed italic mb-6">
                    “{t.text}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <LazyImage
                    src={t.image}
                    alt={t.name}
                    wrapperClassName="w-11 h-11 rounded-full shadow shrink-0"
                    className="w-full h-full object-cover"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#102a43]">
                      {t.name}
                    </h4>
                    <span className="text-xs text-gray-400">{t.role}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-[#102a43] mb-3">
            Ready to Partner With Us?
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Get in touch today for a free portfolio consultation or property valuation.
          </p>
          <Link to="/contact" className="btn-primary">
            <span>Speak to a Property Advisor</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

