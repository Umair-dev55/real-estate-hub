import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Calendar,
  CheckCircle,
  Share2,
  Heart,
  Star,
  ShieldCheck,
  Building,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PropertyCard from '@/components/PropertyCard';
import ContactCTA from '@/components/ContactCTA';
import {
  getPropertyBySlug,
  properties,
  getAgentById,
  formatPrice,
  companyInfo,
} from '@/data/data.js';

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = getPropertyBySlug(slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Reset active image when slug changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [slug]);

  // If property not found
  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center container-custom">
        <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold text-[#102a43] mb-2">
            Property Not Found
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            The property you are looking for may have been sold, rented, or removed.
          </p>
          <Link to="/properties" className="btn-primary">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const agent = getAgentById(property.agent) || {
    name: 'Senior Property Advisor',
    title: 'Consultant',
    phone: companyInfo.phone,
    whatsapp: companyInfo.whatsapp,
    email: companyInfo.email,
    rating: 4.9,
    propertiesSold: 250,
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
  };

  const similarProperties = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.city === property.city))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: property.title,
          text: `Check out ${property.title} in ${property.location} on Zameen Elite!`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Location map dynamically generated for accuracy
  const locationMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    property.location + ', ' + property.city + ', Pakistan'
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="pt-24 pb-24 bg-gray-50/40">
      {/* Breadcrumb / Top Bar */}
      <div className="bg-white border-b border-gray-100 py-3.5 mb-6">
        <div className="container-custom flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#c8922f] transition">
              Home
            </Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-[#c8922f] transition">
              Properties
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-md">
              {property.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-medium transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied Link!' : 'Share'}</span>
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
              className="p-1.5 rounded-full border border-gray-200 hover:border-gray-300 text-gray-700 transition cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 ${
                  isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* ========================================================
            IMAGE GALLERY
           ======================================================== */}
        <AnimatedSection variant="fadeUp" className="mb-8">
          <div className="space-y-3">
            {/* Main Featured Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] max-h-[560px] bg-gray-900 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={property.images[activeImageIndex] || property.images[0]}
                  alt={property.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Status Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-[#102a43] text-white shadow-md">
                  For {property.purpose === 'Rent' ? 'Rent' : 'Sale'}
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#c8922f] text-white shadow-md">
                  {property.type}
                </span>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {activeImageIndex + 1} / {property.images.length} Photos
              </div>
            </div>

            {/* Thumbnail Strip */}
            {property.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {property.images.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative rounded-xl overflow-hidden w-24 h-16 sm:w-28 sm:h-20 shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === index
                        ? 'border-[#c8922f] shadow-md scale-95'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* ========================================================
            MAIN LAYOUT: Details Left, Agent/Conversion Sticky Right
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT COLUMN: Property Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header info */}
            <AnimatedSection variant="fadeUp" className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102a43] mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 text-[#c8922f] shrink-0" />
                    <span>{property.location}</span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="block text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Price
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#c8922f]">
                    {formatPrice(property.price, property.purpose)}
                  </span>
                </div>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                    <BedDouble className="w-5 h-5 text-[#c8922f]" />
                    <div>
                      <span className="block text-[11px] text-gray-400 uppercase font-semibold">
                        Bedrooms
                      </span>
                      <span className="font-bold text-gray-900 text-sm">
                        {property.bedrooms} Beds
                      </span>
                    </div>
                  </div>
                )}

                {property.bathrooms > 0 && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                    <Bath className="w-5 h-5 text-[#c8922f]" />
                    <div>
                      <span className="block text-[11px] text-gray-400 uppercase font-semibold">
                        Bathrooms
                      </span>
                      <span className="font-bold text-gray-900 text-sm">
                        {property.bathrooms} Baths
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                  <Maximize className="w-5 h-5 text-[#c8922f]" />
                  <div>
                    <span className="block text-[11px] text-gray-400 uppercase font-semibold">
                      Area
                    </span>
                    <span className="font-bold text-gray-900 text-sm">
                      {property.area}
                    </span>
                  </div>
                </div>

                {property.yearBuilt && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                    <Calendar className="w-5 h-5 text-[#c8922f]" />
                    <div>
                      <span className="block text-[11px] text-gray-400 uppercase font-semibold">
                        Built In
                      </span>
                      <span className="font-bold text-gray-900 text-sm">
                        {property.yearBuilt}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection variant="fadeUp" className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102a43] mb-4">
                About this Property
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {property.description}
              </p>
            </AnimatedSection>

            {/* Amenities Grid */}
            <AnimatedSection variant="fadeUp" className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102a43] mb-4">
                Amenities & Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-[#c8922f] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Dynamic Location Map */}
            <AnimatedSection variant="fadeUp" className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102a43] mb-2">
                Prime Location: {property.location}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Conveniently situated in {property.location}, {property.city}, offering quick
                access to main arteries, international schools, dining avenues, and commercial hubs.
              </p>
              <div className="w-full h-72 rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  title={`Map showing ${property.title} in ${property.location}`}
                  src={locationMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN: Sticky Agent Contact & CTAs */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Agent Box */}
              <AnimatedSection
                variant="fadeUp"
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow"
                  />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#102a43]">
                      {agent.name}
                    </h3>
                    <p className="text-xs text-gray-500">{agent.title}</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-[#c8922f]">
                      <Star className="w-3.5 h-3.5 fill-[#c8922f]" />
                      <span className="font-bold text-gray-900">{agent.rating}</span>
                      <span className="text-gray-400">({agent.propertiesSold} deals closed)</span>
                    </div>
                  </div>
                </div>

                {/* Direct High-Conversion Action Buttons */}
                <ContactCTA property={property} agentId={agent.id} />
              </AnimatedSection>

              {/* Trust & Guarantee Box */}
              <div className="bg-[#102a43] text-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#efc07a]" />
                  <h4 className="font-serif font-bold text-base">Zameen Elite Guarantee</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Every property on our platform is 100% verified with town planning authorities,
                  NDC clearances, and title deed authentications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SIMILAR PROPERTIES
           ======================================================== */}
        {similarProperties.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-semibold text-[#c8922f] tracking-wider block">
                  RECOMMENDATIONS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102a43]">
                  Similar Properties You May Like
                </h2>
              </div>
              <Link
                to="/properties"
                className="text-sm font-semibold text-[#102a43] hover:text-[#c8922f] transition"
              >
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
