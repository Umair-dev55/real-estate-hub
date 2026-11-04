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
      ? 'bg-blue-600 text-white'
      : 'bg-emerald-600 text-white';

  const detailUrl = `/properties/${property.slug}`;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Image Container with Link */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        <Link to={detailUrl} className="block w-full h-full">
          <motion.img
            src={property.images?.[0]}
            alt={property.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </Link>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
          <span
            className={cn(
              'px-3 py-1 text-xs font-semibold rounded-full shadow-md',
              purposeColor
            )}
          >
            For {property.purpose === 'Rent' ? 'Rent' : 'Sale'}
          </span>
          {property.new && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#c8922f] text-white shadow-md">
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
          aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all duration-300 cursor-pointer"
        >
          <Heart
            className={cn(
              'w-4 h-4 transition-colors duration-300',
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            )}
          />
        </button>

        {/* Price Overlay */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span className="text-white font-bold text-lg drop-shadow-md">
            {formatPrice(property.price, property.purpose)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title as Link */}
          <Link to={detailUrl} className="block">
            <h3 className="font-serif text-lg font-bold text-[#102a43] mb-1 line-clamp-1 group-hover:text-[#c8922f] transition-colors duration-300">
              {property.title}
            </h3>
          </Link>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#c8922f] shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          {/* Features Row */}
          <div className="flex items-center gap-2 pb-4 border-b border-gray-100 text-xs sm:text-sm">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1 text-gray-600">
                <BedDouble className="w-3 h-3 text-gray-400" />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1 text-gray-600">
                <Bath className="w-3 h-3 text-gray-400" />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1 text-gray-600">
              <Maximize className="w-3 h-3 text-gray-400" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="flex items-center justify-between pt-4 mt-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
            {property.type}
          </span>
          <Link
            to={detailUrl}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c8922f] hover:text-[#a67623] transition-colors duration-300 group/link"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
