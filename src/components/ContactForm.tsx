'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#212121] mb-2">
            Navn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A9BA3] focus:border-transparent transition-all"
            placeholder="Ola Nordmann"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#212121] mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A9BA3] focus:border-transparent transition-all"
            placeholder="12 34 56 78"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#212121] mb-2">
            E-post *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A9BA3] focus:border-transparent transition-all"
            placeholder="ola@example.com"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-[#212121] mb-2">
            Adresse
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A9BA3] focus:border-transparent transition-all"
            placeholder="Gate 1, 0100 Oslo"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-[#212121] mb-2">
            Tjeneste *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A9BA3] focus:border-transparent transition-all bg-white"
          >
            <option value="">Velg tjeneste</option>
            <option value="ventilasjonsrens">Komplett ventilasjonsrens</option>
            <option value="varmepumpe">Rens av varmepumpe</option>
            <option value="service">Service og filterbytte</option>
            <option value="filter">Filterabonnement</option>
            <option value="kjokken">Rens av kjøkkenventilasjon</option>
            <option value="overflate">Skånsom overflaterens</option>
            <option value="annet">Annet</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-[#212121] mb-2">
            Ønsket dato
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A9BA3] focus:border-transparent transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#212121] mb-2">
            Melding *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A9BA3] focus:border-transparent transition-all resize-none"
            placeholder="Beskriv ditt behov..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1A9BA3] hover:bg-[#148088] text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Send forespørsel
        </button>

        {/* Success Message */}
        {submitted && (
          <div className="bg-[#E0F7FA] border border-[#1A9BA3] text-[#148088] px-4 py-3 rounded-lg">
            ✓ Takk! Vi har mottatt din henvendelse og kommer tilbake til deg så snart som mulig.
          </div>
        )}
      </div>
    </form>
  );
}
