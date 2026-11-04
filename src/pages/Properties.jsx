import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Building } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';
import {
  filterProperties,
  sortProperties,
} from '@/data/data.js';

const EMPTY_FILTERS = {
  country: '',
  city: '',
  location: '',
  type: '',
  purpose: '',
  minPrice: '',
  maxPrice: '',
  bedrooms: '',
  search: '',
};

const readFiltersFromParams = (params) => ({
  country: params.get('country') || '',
  city: params.get('city') || '',
  location: params.get('location') || '',
  type: params.get('type') || '',
  purpose: params.get('purpose') || '',
  minPrice: params.get('minPrice') || '',
  maxPrice: params.get('maxPrice') || '',
  bedrooms: params.get('bedrooms') || '',
  search: params.get('search') || '',
});

// Grid animation: uses `animate` (not whileInView) so cards always appear,
// even on page reload / restored scroll position.
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filters from searchParams
  const [filters, setFilters] = useState(() => readFiltersFromParams(searchParams));
  const sortBy = searchParams.get('sort') || 'newest';
  const debounceTimerRef = useRef(null);

  // Sync state if URL search params change externally (browser back/forward, hero search)
  useEffect(() => {
    setFilters(readFiltersFromParams(searchParams));
  }, [searchParams.toString()]);

  // Cleanup pending debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  const updateUrlParams = (newFilters, sort = sortBy) => {
    const newParams = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v) newParams.set(k, v);
    });
    if (sort && sort !== 'newest') newParams.set('sort', sort);
    setSearchParams(newParams, { replace: true });
  };

  // Change several filters at once (e.g. country change also clears city + area)
  const handleFiltersChange = (patch) => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    const updated = { ...filters, ...patch };
    setFilters(updated);
    updateUrlParams(updated);
  };

  const handleSortChange = (value) => updateUrlParams(filters, value);

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
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    setFilters(EMPTY_FILTERS);
    setSearchParams({}, { replace: true });
  };

  // Filtered and sorted properties
  const filteredList = useMemo(() => {
    const filtered = filterProperties(filters) || [];
    return sortProperties(filtered, sortBy) || [];
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
              Filter by country, city, area, category and budget to find the right
              home, villa, apartment or plot.
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
          onSortChange={handleSortChange}
          onFiltersChange={handleFiltersChange}
          totalResults={filteredList.length}
        >
        {/* Results Grid */}
        {filteredList.length > 0 ? (
          <motion.div
            // Re-run the stagger whenever the filter/sort result set changes
            key={filteredList.map((p) => p.id).join('-')}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
          >
            {filteredList.map((property) => (
              <motion.div key={property.id} variants={itemVariants}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
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
            <button onClick={handleReset} className="btn-primary">
              Reset All Filters
            </button>
          </motion.div>
        )}
        </PropertyFilters>

      </div>
    </div>
  );
}