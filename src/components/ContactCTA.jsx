import { useState } from 'react';
import { Phone, MessageCircle, Calendar, Send, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getAgentById, companyInfo } from '@/data/data.js';

export default function ContactCTA({ property, agentId, className = '' }) {
  const agent = getAgentById(agentId) || {
    name: 'Real Estate Advisor',
    phone: companyInfo.phone,
    whatsapp: companyInfo.whatsapp,
    email: companyInfo.email,
  };

  const [modalType, setModalType] = useState(null); // 'visit' | 'inquiry' | null
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: 'Morning (10 AM - 1 PM)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const cleanPhone = (agent.phone || companyInfo.phone).replace(/\s+/g, '');
  const cleanWhatsapp = (agent.whatsapp || companyInfo.whatsapp).replace(/[^0-9]/g, '');

  const whatsappMessage = encodeURIComponent(
    `Hello ${agent.name}, I am interested in "${property?.title || 'your property'}" located in ${
      property?.location || 'Pakistan'
    }. Please provide more details.`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalType(null);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: 'Morning (10 AM - 1 PM)',
        message: '',
      });
    }, 2200);
  };

  return (
    <>
      <div className={`space-y-3.5 ${className}`}>
        {/* Primary Contact Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {/* Call Button */}
          <a
            href={`tel:${cleanPhone}`}
            className="flex items-center justify-center gap-2.5 px-4 py-3 bg-[#1a2332] hover:bg-[#253246] text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#c9a96e]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${cleanWhatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Schedule Visit Button */}
        <button
          type="button"
          onClick={() => setModalType('visit')}
          className="w-full flex items-center justify-center gap-2.5 px-4 py-3 bg-[#c9a96e] hover:bg-[#b8954f] text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule a Visit</span>
        </button>

        {/* Contact Agent Message Button */}
        <button
          type="button"
          onClick={() => setModalType('inquiry')}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 hover:border-[#1a2332] text-gray-700 hover:text-[#1a2332] rounded-xl font-medium text-xs transition duration-300 cursor-pointer"
        >
          <span>Send Property Inquiry</span>
        </button>

        <p className="text-[11px] text-gray-400 text-center">
          Direct response within 15 minutes during operating hours
        </p>
      </div>

      {/* Floating Mobile Bottom Bar for High Conversion */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 flex sm:hidden items-center justify-around gap-2 shadow-2xl">
        <a
          href={`tel:${cleanPhone}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#1a2332] text-white text-xs font-semibold rounded-lg shadow"
        >
          <Phone className="w-3.5 h-3.5 text-[#c9a96e]" />
          <span>Call</span>
        </a>
        <a
          href={`https://wa.me/${cleanWhatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded-lg shadow"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => setModalType('visit')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#c9a96e] text-white text-xs font-semibold rounded-lg shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Visit</span>
        </button>
      </div>

      {/* Modal for Visit / Inquiry */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">
                    Request Received!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you. {agent.name} has been notified and will call you back on{' '}
                    <strong>{formData.phone || 'your phone'}</strong> shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <span className="text-xs uppercase font-semibold text-[#c9a96e] tracking-wider">
                      {modalType === 'visit' ? 'Site Tour Booking' : 'Direct Inquiry'}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1a2332] mt-1">
                      {modalType === 'visit'
                        ? 'Schedule Property Visit'
                        : 'Inquire About Property'}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      {property?.title} ({property?.location})
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hamza Malik"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="0321 1234567"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="hamza@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                        />
                      </div>
                    </div>

                    {modalType === 'visit' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Time Slot
                          </label>
                          <select
                            value={formData.time}
                            onChange={(e) =>
                              setFormData({ ...formData, time: e.target.value })
                            }
                            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                          >
                            <option>Morning (10 AM - 1 PM)</option>
                            <option>Afternoon (2 PM - 5 PM)</option>
                            <option>Evening (5 PM - 7 PM)</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Any questions or special requests?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="I would like to inspect the documentation and arrange a guided walkthrough..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 bg-[#c9a96e] hover:bg-[#b8954f] text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {modalType === 'visit'
                          ? 'Confirm Visit Booking'
                          : 'Send Property Inquiry'}
                      </span>
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

