import "./globals.css";
import Navbar from "./components/Navbar";
import Link from 'next/link';

export const metadata = {
  title: "Official UAE Gratuity Calculator 2026 | MOHRE Law Guide",
  description: "Calculate your UAE end-of-service benefits with the most accurate 2026 MOHRE-compliant calculator. Covers Dubai, Abu Dhabi, and all Free Zones.",
  keywords: "gratuity calculator uae, mohre gratuity calculator, end of service calculator dubai, uae labor law 2026, gratuity calculation 2026",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Gratuity Calculator UAE",
        "url": "https://gratuity-calculator-uae-five.vercel.app/",
        "applicationCategory": "FinanceApplication",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "AED" }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#001f3f]">
        <Navbar /> 
        
        {/* Main Content Area */}
        <main>{children}</main>
        
        {/* Professional Footer */}
        <footer className="bg-[#001122] border-t border-[#D4AF37]/20 pt-16 pb-8 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            {/* Column 1: About */}
            <div>
              <h4 className="text-[#D4AF37] font-black text-xl mb-6 tracking-tighter uppercase">Gratuity Calculator UAE</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                MOHRE-compliant end of service calculator for UAE employees. Providing 100% accurate results based on 2026 Labor Law.
              </p>
              <div className="flex gap-4 font-bold text-[#D4AF37]">
                 <span className="cursor-pointer hover:text-white">FB</span>
                 <span className="cursor-pointer hover:text-white">TW</span>
                 <span className="cursor-pointer hover:text-white">LN</span>
              </div>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/uae-labour-law" className="hover:text-[#D4AF37]">Full Labour Law</Link></li>
                <li><Link href="/guides" className="hover:text-[#D4AF37]">Claim Process</Link></li>
                <li><Link href="/blog" className="hover:text-[#D4AF37]">Legal Blog</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4AF37]">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Calculators</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/jafza-calculator" className="hover:text-[#D4AF37]">JAFZA Gratuity</Link></li>
                <li><Link href="/domestic-workers" className="hover:text-[#D4AF37]">Domestic Help</Link></li>
                <li><Link href="/dubai" className="hover:text-[#D4AF37]">Dubai Mainland</Link></li>
                <li><Link href="/abu-dhabi" className="hover:text-[#D4AF37]">Abu Dhabi Laws</Link></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal Updates</h4>
              <p className="text-gray-500 text-xs mb-4 text-justify">UAE Labour Law (Federal Decree-Law No. 33 of 2021) ke mutabiq apni gratuity update hasil karne ke liye subscribe karein.</p>
              <div className="flex bg-[#002d5a] p-1 rounded-xl border border-white/5">
                <input type="email" placeholder="Email" className="bg-transparent p-2 text-xs text-white outline-none w-full" />
                <button className="bg-[#D4AF37] text-[#001f3f] px-4 py-2 rounded-lg font-bold text-xs">JOIN</button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
            © 2026 Gratuity Calculator UAE - Expertly Optimized for Private Sector Employees.
          </div>
        </footer>
      </body>
    </html>
  );
}