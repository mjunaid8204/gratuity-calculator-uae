import "./globals.css";
import Navbar from "./components/Navbar";
import Link from 'next/link';

export const metadata = {
  title: "UAE Gratuity Calculator (End of Service) — Estimate EOSB in AED",
  description: "UAE Gratuity Calculator to estimate end of service gratuity (EOSB) in AED based on UAE Labour Law. Enter basic salary, start/end dates, unpaid leave days, contract type, and reason to see a clear breakdown.",
  keywords: ["UAE gratuity calculator", "end of service gratuity UAE", "EOSB calculator", "UAE labour law", "Dubai", "Abu Dhabi"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#001f3f] min-h-screen flex flex-col">
        <Navbar /> 
        
        <main className="flex-grow">{children}</main>
        
        {/* Updated Professional Footer */}
        <footer className="bg-[#001122] border-t border-[#D4AF37]/20 pt-16 pb-8 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left">
            
            {/* Column 1: Brand Info */}
            <div>
              <h4 className="text-[#D4AF37] font-black text-xl mb-6 tracking-tighter uppercase">Gratuity Calculator UAE</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Providing the most accurate End of Service Benefits (EOSB) estimations for UAE private sector employees under the latest 2026 Labour Law.
              </p>
            </div>

            {/* Column 2: Legal & Essential Pages */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company & Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Support</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/disclaimer" className="hover:text-[#D4AF37] transition-colors">Legal Disclaimer</Link></li>
              </ul>
            </div>

            {/* Column 3: Tools & Resources */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Legal News Blog</Link></li>
                <li><Link href="/domestic-workers" className="hover:text-[#D4AF37] transition-colors">Domestic Workers</Link></li>
                <li><Link href="/jafza-calculator" className="hover:text-[#D4AF37] transition-colors">JAFZA Free Zone</Link></li>
                <li><Link href="/dubai" className="hover:text-[#D4AF37] transition-colors">Dubai Mainland Guide</Link></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Stay Updated</h4>
              <p className="text-gray-500 text-[10px] mb-4 uppercase tracking-widest font-bold">Subscribe for UAE Law updates</p>
              <div className="flex bg-[#002d5a] p-1 rounded-xl border border-white/5">
                <input type="email" placeholder="Email Address" className="bg-transparent p-2 text-xs text-white outline-none w-full" />
                <button className="bg-[#D4AF37] text-[#001f3f] px-4 py-2 rounded-lg font-black text-[10px] uppercase">Subscribe</button>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
              © 2026 Gratuity Calculator UAE — Professional Financial Tool
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}