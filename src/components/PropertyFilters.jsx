import { useMemo, useState } from "react";
import { Search, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";
import {
  properties,
  countries,
  citiesByCountry,
  getLocalitiesByCity,
  propertyTypes,
  priceSteps,
  bedroomOptions,
  sortOptions,
} from "@/data/data.js";
import { cn } from "@/lib/utils.js";

const BEDS = bedroomOptions.filter((n) => n <= 6);

const labelCls =
  "block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5";
function Field({ label, children }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}
export default function PropertyFilters({
  filters,
  onFilterChange,
  onFiltersChange,
  onReset,
  sortBy,
  onSortChange,
  totalResults,
  children,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cityOptions =
    citiesByCountry[filters.country] || Object.values(citiesByCountry).flat();
  const localities = filters.city ? getLocalitiesByCity(filters.city) : [];
  const steps = priceSteps[filters.purpose] || [];

  // Listing counts shown next to options (based on the other active filters would be
  // heavier; simple global counts are enough and cheap)
  const countBy = useMemo(() => {
    const c = { type: {}, city: {} };
    properties.forEach((p) => {
      c.type[p.type] = (c.type[p.type] || 0) + 1;
      c.city[p.city] = (c.city[p.city] || 0) + 1;
    });
    return c;
  }, []);

  const set = (patch) => onFiltersChange(patch);

  // Active filter chips
  const chips = [];
  if (filters.country)
    chips.push({
      k: "country",
      label: filters.country,
      clear: { country: "", city: "", location: "" },
    });
  if (filters.city)
    chips.push({
      k: "city",
      label: filters.city,
      clear: { city: "", location: "" },
    });
  if (filters.location)
    chips.push({
      k: "location",
      label: filters.location,
      clear: { location: "" },
    });
  if (filters.type)
    chips.push({ k: "type", label: filters.type, clear: { type: "" } });
  if (filters.purpose)
    chips.push({
      k: "purpose",
      label: filters.purpose === "Buy" ? "For Sale" : "For Rent",
      clear: { purpose: "", minPrice: "", maxPrice: "" },
    });
  if (filters.minPrice)
    chips.push({
      k: "min",
      label: `Min ${steps.find((s) => String(s.value) === String(filters.minPrice))?.label || filters.minPrice}`,
      clear: { minPrice: "" },
    });
  if (filters.maxPrice)
    chips.push({
      k: "max",
      label: `Max ${steps.find((s) => String(s.value) === String(filters.maxPrice))?.label || filters.maxPrice}`,
      clear: { maxPrice: "" },
    });
  if (filters.bedrooms)
    chips.push({
      k: "beds",
      label: `${filters.bedrooms}+ Beds`,
      clear: { bedrooms: "" },
    });
  if (filters.search)
    chips.push({
      k: "search",
      label: `“${filters.search}”`,
      clear: { search: "" },
    });

  const panel = (
    <div className="space-y-5">
      {/* Purpose segmented control */}
      <div>
        <label className={labelCls}>I want to</label>
        <div className="grid grid-cols-3 bg-gray-100 rounded-xl p-1 gap-1">
          {[
            { v: "", l: "All" },
            { v: "Buy", l: "Buy" },
            { v: "Rent", l: "Rent" },
          ].map((o) => (
            <button
              key={o.v}
              type="button"
              onClick={() => set({ purpose: o.v, minPrice: "", maxPrice: "" })}
              className={cn(
                "py-2 text-sm font-semibold rounded-lg transition cursor-pointer",
                filters.purpose === o.v
                  ? "bg-[#102a43] text-white shadow"
                  : "text-gray-600 hover:text-[#102a43]",
              )}
            >
              {o.l}
            </button>
          ))}
        </div>
      </div>

      {/* Location: Country > City > Area */}
      <div className="grid grid-cols-1 gap-3.5">
        <Field label="Country">
          <CustomSelect
            value={filters.country}
            onChange={(v) => set({ country: v, city: "", location: "" })}
            placeholder="All Countries"
            options={[
              { value: "", label: "All Countries" },
              ...countries.map((c) => ({ value: c, label: c })),
            ]}
          />
        </Field>
        <Field label="City">
          <CustomSelect
            value={filters.city}
            onChange={(v) => set({ city: v, location: "" })}
            placeholder="All Cities"
            options={[
              { value: "", label: "All Cities" },
              ...cityOptions.map((c) => ({
                value: c,
                label: c,
                count: countBy.city[c] || 0,
              })),
            ]}
          />
        </Field>
        <Field label="Area / Locality">
          <CustomSelect
            value={filters.location}
            onChange={(v) => set({ location: v })}
            disabled={!filters.city}
            placeholder={
              filters.city
                ? `All areas in ${filters.city}`
                : "Select a city first"
            }
            options={[
              {
                value: "",
                label: filters.city
                  ? `All areas in ${filters.city}`
                  : "Select a city first",
              },
              ...localities.map((l) => ({ value: l, label: l })),
            ]}
          />
        </Field>
      </div>

      {/* Category */}
      <div>
        <label className={labelCls}>Category</label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => set({ type: "" })}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer",
              !filters.type
                ? "bg-[#c8922f] border-[#c8922f] text-white"
                : "bg-white border-gray-200 text-gray-600 hover:border-[#c8922f] hover:text-[#c8922f]",
            )}
          >
            All
          </button>
          {propertyTypes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => set({ type: filters.type === t ? "" : t })}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer",
                filters.type === t
                  ? "bg-[#c8922f] border-[#c8922f] text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#c8922f] hover:text-[#c8922f]",
              )}
            >
              {t} <span className="opacity-60">{countBy.type[t] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <label className={labelCls}>
          Price (PKR{filters.purpose === "Rent" ? " / month" : ""})
        </label>
        {filters.purpose ? (
          <div className="grid grid-cols-2 gap-3">
            <CustomSelect
              value={filters.minPrice}
              onChange={(v) => set({ minPrice: v })}
              placeholder="Min"
              options={[
                { value: "", label: "Min" },
                ...steps
                  .filter(
                    (s) =>
                      !filters.maxPrice || s.value < Number(filters.maxPrice),
                  )
                  .map((s) => ({ value: s.value, label: s.label })),
              ]}
            />
            <CustomSelect
              value={filters.maxPrice}
              onChange={(v) => set({ maxPrice: v })}
              placeholder="Max"
              options={[
                { value: "", label: "Max" },
                ...steps
                  .filter(
                    (s) =>
                      !filters.minPrice || s.value > Number(filters.minPrice),
                  )
                  .map((s) => ({ value: s.value, label: s.label })),
              ]}
            />
          </div>
        ) : (
          <p className="text-xs text-gray-400 bg-gray-50 border border-dashed border-gray-200 rounded-xl px-3.5 py-2.5">
            Select Buy or Rent to set a price range.
          </p>
        )}
      </div>

      {/* Bedrooms */}
      <div>
        <label className={labelCls}>Bedrooms</label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => set({ bedrooms: "" })}
            className={cn(
              "min-w-10 px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer",
              !filters.bedrooms
                ? "bg-[#102a43] border-[#102a43] text-white"
                : "bg-white border-gray-200 text-gray-600 hover:border-[#102a43]",
            )}
          >
            Any
          </button>
          {BEDS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() =>
                set({
                  bedrooms:
                    String(filters.bedrooms) === String(n) ? "" : String(n),
                })
              }
              className={cn(
                "min-w-10 px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer",
                String(filters.bedrooms) === String(n)
                  ? "bg-[#102a43] border-[#102a43] text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#102a43]",
              )}
            >
              {n}+
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block sticky top-24 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-serif text-lg font-bold text-[#102a43] flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#c8922f]" /> Filters
          </h2>
          {chips.length > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="text-xs font-semibold text-[#c8922f] hover:underline cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
        {panel}
      </aside>

      <div className="min-w-0">
        {/* Top bar: search + sort (always visible) */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-3 md:items-center">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by title, area, city or keyword..."
              value={filters.search}
              onChange={(e) => onFilterChange("search", e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8922f]/60 focus:border-[#c8922f] transition"
            />
            {filters.search && (
              <button
                type="button"
                onClick={() => set({ search: "" })}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:border-[#c8922f] cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {chips.length > 0 && (
                <span className="bg-[#c8922f] text-white text-[10px] rounded-full w-5 h-5 inline-flex items-center justify-center">
                  {chips.length}
                </span>
              )}
            </button>
            <div className="relative flex-1 md:flex-none">
              <CustomSelect
                className="flex-1 md:flex-none md:w-52"
                align="right"
                value={sortBy}
                onChange={onSortChange}
                options={sortOptions.map((o) => ({
                  value: o.value,
                  label: o.label,
                }))}
              />
            </div>
          </div>
        </div>

        {/* Active chips + count */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="text-sm text-gray-500 mr-1">
            <strong className="text-[#102a43]">{totalResults}</strong>{" "}
            {totalResults === 1 ? "property" : "properties"} found
          </span>
          {chips.map((c) => (
            <button
              key={c.k}
              type="button"
              onClick={() => set(c.clear)}
              className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1 rounded-full bg-[#102a43]/5 hover:bg-[#102a43]/10 text-xs font-semibold text-[#102a43] transition cursor-pointer"
            >
              {c.label}
              <X className="w-3.5 h-3.5" />
            </button>
          ))}
          {chips.length > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#c8922f] hover:underline cursor-pointer ml-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear all
            </button>
          )}
        </div>

        {/* Mobile filter panel */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            {panel}
          </div>
        )}

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
