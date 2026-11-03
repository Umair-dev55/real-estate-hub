import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Building } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';
import {
  properties,
  filterProperties,
  sortProperties,
} from '@/data/data.js';

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filters from searchParams
  const [filters, setFilters] = useState(() => ({
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    purpose: searchParams.get('purpose') || '',
    priceRange: searchParams.get('priceRange') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    city: searchParams.get('city') || '',
    search: searchParams.get('search') || '',
  }));

  const [sortBy, setSortBy] = useState('newest');
  const debounceTimerRef = useRef(null);

  // Sync state if URL search params change externally (e.g. browser back/forward or hero search navigation)
  useEffect(() => {
    setFilters({
      location: searchParams.get('location') || '',
      type: searchParams.get('type') || '',
      purpose: searchParams.get('purpose') || '',
      priceRange: searchParams.get('priceRange') || '',
      bedrooms: searchParams.get('bedrooms') || '',
      city: searchParams.get('city') || '',
      search: searchParams.get('search') || '',
    });
  }, [searchParams.toString()]);

  const updateUrlParams = (newFilters) => {
    const newParams = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v) newParams.set(k, v);
    });
    setSearchParams(newParams, { replace: true });
  };

  const handleFilterChange = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);

    if (key === 'search') {
      // Debounce search URL update to avoid history clutter
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = setTimeout(() => {
        updateUrlParams(updated);
      }, 350);
    } else {
      updateUrlParams(updated);
    }
  };

  const handleReset = () => {
    const cleared = {
      location: '',
      type: '',
      purpose: '',
      priceRange: '',
      bedrooms: '',
      city: '',
      search: '',
    };
    setFilters(cleared);
    setSortBy('newest');
    setSearchParams({}, { replace: true });
  };

  // Filtered and sorted properties
  const filteredList = useMemo(() => {
    const filtered = filterProperties(filters);
    return sortProperties(filtered, sortBy);
  }, [filters, sortBy]);

  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      {/* Page Header */}
      <div className="bg-[#102a43] text-white py-14 mb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c8922f_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container-custom relative z-10">
          <AnimatedSection variant="fadeDown" className="max-w-2xl">
            <span className="inline-block text-xs uppercase font-semibold tracking-[0.25em] text-[#efc07a] mb-2">
              PAKISTAN PROPERTY DIRECTORY
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              Explore Premium Properties
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Browse houses, luxury villas, modern apartments, and prime plots across DHA,
              Bahria Town, Gulberg, and more.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container-custom">
        {/* Filter Component */}
        <PropertyFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={filteredList.length}
        />

        {/* Results Grid */}
        <AnimatePresence mode="wait">
          {filteredList.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer
                staggerDelay={0.08}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
              >
                {filteredList.map((property) => (
                  <StaggerItem key={property.id}>
                    <PropertyCard property={property} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-3xl p-12 text-center max-w-lg mx-auto shadow-sm border border-gray-100 my-12"
            >
              <div className="w-16 h-16 rounded-full bg-amber-50 text-[#c8922f] flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#102a43] mb-2">
                No Properties Found
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We couldn’t find any listings matching your current filter criteria. Try
                broadening your search or reset the filters.
              </p>
              <button
                onClick={handleReset}
                className="btn-primary"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
