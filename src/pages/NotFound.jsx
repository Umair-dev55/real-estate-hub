import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-[70vh] flex items-center">
      <div className="container-custom">
        <div className="bg-white rounded-3xl p-12 text-center max-w-lg mx-auto shadow-sm border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-[#c8922f] flex items-center justify-center mx-auto mb-4">
            <Building className="w-8 h-8" />
          </div>
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#c8922f]">
            Error 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#102a43] mt-2 mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <Link
              to="/properties"
              className="px-6 py-2.5 rounded-full border border-[#102a43]/20 text-sm font-semibold text-[#102a43] hover:border-[#c8922f] hover:text-[#c8922f] transition"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
