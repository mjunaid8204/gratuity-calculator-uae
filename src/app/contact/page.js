"use client";
export default function Contact() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white py-12 px-6">
      <div className="max-w-2xl mx-auto bg-[#002d5a] p-10 rounded-3xl border border-[#D4AF37]/30 shadow-2xl">
        <h1 className="text-3xl font-bold text-[#D4AF37] mb-6">Consult an Expert</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-4 bg-[#001f3f] border border-gray-700 rounded-xl focus:border-[#D4AF37] outline-none" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#001f3f] border border-gray-700 rounded-xl focus:border-[#D4AF37] outline-none" />
          <textarea placeholder="Tell us about your gratuity issue..." rows="5" className="w-full p-4 bg-[#001f3f] border border-gray-700 rounded-xl focus:border-[#D4AF37] outline-none"></textarea>
          <button className="w-full py-4 bg-[#D4AF37] text-[#001f3f] font-bold rounded-xl hover:bg-yellow-500 shadow-lg shadow-yellow-500/20">Send Request</button>
        </form>
      </div>
    </div>
  );
}