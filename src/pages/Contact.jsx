import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Building2,
  Sparkles,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import { companyInfo } from '@/data/data.js';

export default function Contact() {
  const [selectedOffice, setSelectedOffice] = useState(companyInfo.offices[0]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Buy a Property',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Buy a Property',
        message: '',
      });
    }, 4000);
  };

  const whatsappLink = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    'Hello Zameen Elite! I would like to speak with a property consultant regarding real estate in Pakistan.'
  )}`;

  return (
    <div className="pt-24 pb-20 bg-gray-50/50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#102a43] text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#efc07a_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <AnimatedSection variant="fadeDown">
            <span className="inline-block text-xs uppercase font-semibold tracking-[0.25em] text-[#efc07a] mb-2">
              GET IN TOUCH
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              We’re Here to Assist You
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Have inquiries about buying, selling, or renting properties in DHA, Bahria Town, or
              Gulberg? Reach out to our dedicated advisory desks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="container-custom">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
              className="group block bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#fdf8f0] text-[#c8922f] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#102a43] mb-1">
                Direct Phone
              </h3>
              <p className="text-xs text-gray-500 mb-2">Available Mon - Sat, 9 AM - 7 PM</p>
              <span className="text-sm font-semibold text-[#c8922f]">
                {companyInfo.phone}
              </span>
            </a>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.2}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#102a43] mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-gray-500 mb-2">Instant assistance & brochures</p>
              <span className="text-sm font-semibold text-emerald-600">
                Chat on WhatsApp
              </span>
            </a>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.3}>
            <a
              href={`mailto:${companyInfo.email}`}
              className="group block bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f0f4f8] text-[#102a43] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#102a43] mb-1">
                Email Desk
              </h3>
              <p className="text-xs text-gray-500 mb-2">Official inquiries & proposals</p>
              <span className="text-sm font-semibold text-[#102a43]">
                {companyInfo.email}
              </span>
            </a>
          </AnimatedSection>
        </div>

        {/* Main Grid: Form Left, Offices & Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form (7 columns) */}
          <AnimatedSection
            variant="fadeRight"
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100"
          >
            <div className="mb-6">
              <span className="text-xs uppercase font-semibold text-[#c8922f] tracking-wider block">
                MESSAGE OUR TEAM
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102a43] mt-1">
                Send Us an Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Fill out the form below and one of our dedicated property managers will connect
                with you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you for contacting Zameen Elite. Our regional manager has received your
                  request and will call you on <strong>{formData.phone || 'your number'}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asad Siddiqui"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="asad@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Subject / Interest
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f] cursor-pointer"
                    >
                      <option>Buy a Property</option>
                      <option>Sell my Property</option>
                      <option>Rent a Residence</option>
                      <option>Commercial Investment</option>
                      <option>Legal & Documentation Advice</option>
                      <option>General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you are looking for (e.g. 1 Kanal house in DHA Phase 6 Lahore, budget 8-10 Crore)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c8922f]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#102a43] hover:bg-[#243b53] text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#efc07a]" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Regional Offices & Map (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection variant="fadeLeft" className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <span className="text-xs uppercase font-semibold text-[#c8922f] tracking-wider block mb-1">
                NATIONWIDE PRESENCE
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102a43] mb-4">
                Our Regional Offices
              </h2>

              {/* Office Selector Pills */}
              <div className="flex gap-2 mb-6">
                {companyInfo.offices.map((office) => (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition cursor-pointer ${
                      selectedOffice.id === office.id
                        ? 'bg-[#102a43] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>

              {/* Selected Office Details */}
              <div className="space-y-4 pb-6 border-b border-gray-100">
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 text-[#c8922f] mt-0.5 shrink-0" />
                  <span>{selectedOffice.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone className="w-4 h-4 text-[#c8922f] shrink-0" />
                  <a
                    href={`tel:${selectedOffice.phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#c8922f] font-medium"
                  >
                    {selectedOffice.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail className="w-4 h-4 text-[#c8922f] shrink-0" />
                  <a
                    href={`mailto:${selectedOffice.email}`}
                    className="hover:text-[#c8922f]"
                  >
                    {selectedOffice.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Clock className="w-4 h-4 text-[#c8922f] shrink-0" />
                  <span>{selectedOffice.hours}</span>
                </div>
              </div>

              {/* Interactive Office Google Map */}
              <div className="mt-6">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                  Location Map ({selectedOffice.city} Office)
                </span>
                <div className="w-full h-52 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                  <iframe
                    title={`${selectedOffice.city} Office Map`}
                    src={selectedOffice.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

