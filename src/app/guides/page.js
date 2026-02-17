"use client";
export default function Guides() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-6">How to Claim Your Gratuity</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-left">
        <div className="bg-[#002d5a] p-6 rounded-2xl shadow-xl">
          <span className="text-[#D4AF37] font-bold text-2xl">01.</span>
          <h2 className="text-xl font-bold inline ml-4">Check Your Labour Contract</h2>
          <p className="text-gray-400 mt-2 ml-12">Confirm karein ke aapka 'Basic Salary' component kya hai.</p>
        </div>
        <div className="bg-[#002d5a] p-6 rounded-2xl shadow-xl">
          <span className="text-[#D4AF37] font-bold text-2xl">02.</span>
          <h2 className="text-xl font-bold inline ml-4">MOHRE Complaint</h2>
          <p className="text-gray-400 mt-2 ml-12">Agar company pay nahi kar rahi, toh MOHRE app par complaint darj karein.</p>
        </div>
      </div>
    </div>
  );
}