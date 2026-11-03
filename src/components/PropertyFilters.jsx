import { Search, RotateCcw } from 'lucide-react';
import {
  locations,
  cities,
  propertyTypes,
  purposes,
  buyPriceRanges,
  rentPriceRanges,
  bedroomOptions,
  sortOptions,
} from '@/data/data.js';

export default function PropertyFilters({
  filters,
  onFilterChange,
  onReset,
  sortBy,
  onSortChange,
  totalResults,
}) {
  // Select appropriate price brackets depending on Purpose (Buy vs Rent)
  const activePriceRanges =
    filters.purpose === 'Rent' ? rentPriceRanges : buyPriceRanges;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-8">
      {/* Search Input Bar */}
      <div className="relative mb-5">
        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search by title, location, city, area, or keywords..."
          value={filters.search || ''}
          onChange={(e) => onFilterChange('search', e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8922f] focus:border-transparent transition"
        />
      </div>

      {/* Primary Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {/* Purpose */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
            Purpose
          </label>
          <select
            value={filters.purpose || ''}
            onChange={(e) => {
              // When switching purpose, reset priceRange if incompatible
              onFilterChange('purpose', e.target.value);
              onFilterChange('priceRange', '');
            }}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f] focus:border-transparent cursor-pointer"
          >
            <option value="">All (Buy & Rent)</option>
            {purposes.map((p) => (
              <option key={p} value={p}>
                For {p === 'Buy' ? 'Sale' : 'Rent'}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
            City
          </label>
          <select
            value={filters.city || ''}
            onChange={(e) => onFilterChange('city', e.target.value)}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f] focus:border-transparent cursor-pointer"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
            Property Type
          </label>
          <select
            value={filters.type || ''}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f] focus:border-transparent cursor-pointer"
          >
            <option value="">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Budget / Price Range (Dynamic according to Buy/Rent) */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
            Budget ({filters.purpose === 'Rent' ? 'Monthly' : 'PKR'})
          </label>
          <select
            value={filters.priceRange || ''}
            onChange={(e) => onFilterChange('priceRange', e.target.value)}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f] focus:border-transparent cursor-pointer"
          >
            <option value="">Any Budget</option>
            {activePriceRanges.map((range) => (
              <option key={range.label} value={range.label}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
            Bedrooms (Minimum)
          </label>
          <select
            value={filters.bedrooms || ''}
            onChange={(e) => onFilterChange('bedrooms', e.target.value)}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f] focus:border-transparent cursor-pointer"
          >
            <option value="">Any Bedrooms</option>
            {bedroomOptions.map((num) => (
              <option key={num} value={num}>
                {num}+ {num === 1 ? 'Bedroom' : 'Bedrooms'}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Secondary Row: Specific Locality, Sorting & Reset */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Specific Location Select */}
        <div className="flex-1 max-w-sm">
          <select
            value={filters.location || ''}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c8922f] cursor-pointer"
          >
            <option value="">All Localities (DHA, Bahria, Gulberg, Clifton...)</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Results count & Sort */}
        <div className="flex flex-wrap items-center gap-3 justify-between md:justify-end">
          <span className="text-xs font-medium text-gray-500">
            Showing <strong className="text-gray-900">{totalResults}</strong> properties
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c8922f] cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-600 hover:text-[#c8922f] hover:bg-gray-50 rounded-lg border border-gray-200 transition cursor-pointer"
              title="Reset all filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
