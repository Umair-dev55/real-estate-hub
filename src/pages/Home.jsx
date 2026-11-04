import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Search,
  Globe,
  MapPin,
  Building2,
  ShieldCheck,
  Headphones,
  Heart,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  properties,
  getFeaturedProperties,
  trustIndicators,
  statistics,
  countries,
  citiesByCountry,
  propertyTypes,
} from "@/data/data.js";
import CustomSelect from "@/components/CustomSelect";

export default function Home() {
  const navigate = useNavigate();
  const featured = getFeaturedProperties();

  // Hero search bar states: Country -> City -> Category
  const [country, setCountry] = useState(countries[0] || "");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  const cityOptions = citiesByCountry[country] || [];

  const handleHeroSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (country) params.set("country", country);
    if (city) params.set("city", city);
    if (category) params.set("type", category);
    navigate(`/properties?${params.toString()}`);
  };

  const trustIconMap = {
    Building2: Building2,
    ShieldCheck: ShieldCheck,
    Headphones: Headphones,
    Heart: Heart,
  };

  return (
    <div className="relative overflow-hidden">
      {/* ========================================================
          HERO SECTION (Matches Reference Image)
         ======================================================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Hero Background Image with Parallax scale */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
            alt="Luxury Architecture Villa in Pakistan"
            className="w-full h-full object-cover object-center"
          />
          {/* Dual Overlay: Dark navy gradient for elegance and high contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929]/90 via-[#102a43]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-transparent to-black/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 w-full py-12 lg:py-20">
          <div className="max-w-2xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#fdf8f0]">
                PREMIUM PROPERTIES. BETTER LIVING.
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4"
            >
              Find Your <br />
              <span className="text-white">Dream Home</span> <br />
              <span
                style={{ fontFamily: "'Dancing Script', cursive" }}
                className="text-[#efc07a] italic font-normal text-5xl sm:text-6xl lg:text-7xl"
              >
                with Zameen Elite
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-200 max-w-xl font-normal leading-relaxed mb-8 sm:mb-10"
            >
              Discover bespoke modern homes, prime Pakistani addresses, and
              lifestyle-driven communities across Lahore, Islamabad, and
              Karachi.
            </motion.p>
          </div>

          {/* Hero Floating Search Card (Exact Match to Design Reference) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-4xl bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-full p-3 sm:p-2.5 shadow-2xl border border-white/30"
          >
            <form
              onSubmit={handleHeroSearch}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-1"
            >
              {/* Country */}
              <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 sm:py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
                <Globe className="w-5 h-5 text-[#c9a96e] shrink-0" />
                <div className="flex-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      setCity("");
                    }}
                    className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none cursor-pointer"
                  >
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* City */}
              <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 sm:py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
                <MapPin className="w-5 h-5 text-[#c9a96e] shrink-0" />
                <div className="flex-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none cursor-pointer"
                  >
                    <option value="">All Cities</option>
                    {cityOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category */}
              <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 sm:py-2">
                <Building2 className="w-5 h-5 text-[#c9a96e] shrink-0" />
                <div className="flex-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none cursor-pointer"
                  >
                    <option value="">All Categories</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#102a43] hover:bg-[#243b53] text-white font-semibold text-sm rounded-xl sm:rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl shrink-0 cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#efc07a]" />
                <span>Search</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          TRUST INDICATORS SECTION (From Reference Image)
         ======================================================== */}
      <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
        <div className="container-custom">
          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-gray-100"
          >
            {trustIndicators.map((item) => {
              const IconComp = trustIconMap[item.icon] || Building2;
              return (
                <StaggerItem
                  key={item.id}
                  className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0"
                >
                  <div className="w-14 h-14 rounded-full bg-[#fdf8f0] border border-[#efc07a]/30 flex items-center justify-center text-[#c8922f] mb-4 shadow-sm hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#102a43] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          FEATURED PROPERTIES SECTION
         ======================================================== */}
      <section className="py-20 bg-gray-50/60">
        <div className="container-custom">
          <SectionHeading
            label="FEATURED PROPERTIES"
            title="Handpicked Homes for You"
            subtitle="Explore our most exclusive residential and commercial opportunities in Pakistan."
            linkText="View All Properties"
            linkTo="/properties"
          />

          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {featured.slice(0, 6).map((property) => (
              <StaggerItem key={property.id}>
                <PropertyCard property={property} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/properties"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Explore All 16+ Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE US / COMPANY INTRODUCTION
          (Matches Reference Image with Split Layout & Photo Script Tag)
         ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Image with Script Badge */}
            <AnimatedSection
              variant="fadeRight"
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=750&fit=crop"
                  alt="Modern Luxury Living Room interior in Pakistan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Script Tag from Reference Image: "More Than Just a Home" */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50 -rotate-3">
                  <span
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                    className="text-2xl sm:text-3xl font-bold text-[#102a43] leading-none"
                  >
                    More Than Just <br />a Home
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content */}
            <AnimatedSection
              variant="fadeLeft"
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#c8922f] mb-3">
                WHY CHOOSE ZAMEEN ELITE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102a43] leading-[1.2] mb-5">
                More Than Properties. <br />
                We Build Futures.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Whether you’re buying, selling, or renting, we make the process
                simple, transparent, and stress-free. Your dream home is closer
                than you think, backed by our team of certified property legal
                advisors and market experts.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
                {statistics.map((stat) => (
                  <div key={stat.id}>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#102a43] flex items-center">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#102a43] hover:text-[#c8922f] transition group"
                >
                  <span>Learn more about our heritage & values</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM CTA SECTION (Matches Reference Image Banner)
         ======================================================== */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <AnimatedSection
            variant="scaleUp"
            className="relative rounded-3xl bg-gradient-to-r from-[#102a43] via-[#1b3a57] to-[#0a1929] overflow-hidden p-8 sm:p-12 lg:p-16 shadow-2xl"
          >
            {/* Background Decorative Graphic */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 lg:opacity-60 pointer-events-none overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&h=600&fit=crop"
                alt="Architecture"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#102a43] to-transparent" />
            </div>

            <div className="relative z-10 max-w-xl">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#efc07a] mb-2 block">
                READY TO FIND YOUR PERFECT HOME?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Let’s Make It Happen
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                Explore the best properties, get expert advice, and take the
                next step towards your dream home today.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#c8922f] hover:bg-[#a67623] text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
