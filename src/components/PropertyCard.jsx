import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, MapPin, BedDouble, Bath, Maximize, ArrowRight } from 'lucide-react';
import { formatPrice } from '@/data/data.js';
import { cn } from '@/lib/utils.js';

export default function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const purposeColor =
    property.purpose === 'Rent'
      ? 'bg-blue-500 text-white'
      : 'bg-emerald-500 text-white';

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={property.images?.[0]}
          alt={property.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className={cn(
              'px-3 py-1 text-xs font-semibold rounded-full shadow-md',
              purposeColor
            )}
          >
            For {property.purpose === 'Rent' ? 'Rent' : 'Sale'}
          </span>
          {property.new && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#c9a96e] text-white shadow-md">
              NEW
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all duration-300"
        >
          <Heart
            className={cn(
              'w-4 h-4 transition-colors duration-300',
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            )}
          />
        </button>

        {/* Price Overlay */}
        <div className="absolute bottom-3 left-3">
          <span className="text-white font-bold text-lg drop-shadow-lg">
            {formatPrice(property.price, property.purpose)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-serif text-lg font-bold text-[#1a2332] mb-1 line-clamp-1 group-hover:text-[#c9a96e] transition-colors duration-300">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
          <MapPin className="w-3.5 h-3.5 text-[#c9a96e] shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Features Row */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5 text-gray-600 text-sm">
              <BedDouble className="w-4 h-4 text-gray-400" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5 text-gray-600 text-sm">
              <Bath className="w-4 h-4 text-gray-400" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            <Maximize className="w-4 h-4 text-gray-400" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4">
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            {property.type}
          </span>
          <Link
            to={`/properties/${property.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a96e] hover:text-[#b8954f] transition-colors duration-300 group/link"
          >
            Details
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
