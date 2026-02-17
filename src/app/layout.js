import "./globals.css";
import Navbar from "./components/Navbar";
import Link from 'next/link';

// Aapka naya SEO Metadata yahan shamil kar diya hai
export const metadata = {
  title: "UAE Gratuity Calculator (End of Service) — Estimate EOSB in AED",
  description: "UAE Gratuity Calculator to estimate end of service gratuity (EOSB) in AED based on UAE Labour Law. Enter basic salary, start/end dates, unpaid leave days, contract type, and reason to see a clear breakdown.",
  keywords: [
    "UAE gratuity calculator",
    "end of service gratuity UAE",
    "EOSB calculator",
    "UAE labour law gratuity",
    "Dubai gratuity calculator",
    "Abu Dhabi gratuity",
    "basic salary gratuity",
    "unpaid leave gratuity deduction",
    "limited contract gratuity",
    "unlimited contract gratuity",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "UAE Gratuity Calculator — End of Service (EOSB)",
    description: "Estimate your UAE end of service gratuity (EOSB) in AED with a clean breakdown, including unpaid leave deductions.",
    type: "website",
    url: "/",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  // Advanced Schema for Google Search
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
      <body className="antialiased bg-[#001f3f] min-h-screen flex flex-col">
        <Navbar /> 
        
        {/* Page Content */}
        <main className="flex-grow">{children}</main>
        
        {/* Professional Footer */}
        <footer className="bg-[#001122] border-t border-[#D4AF37]/20 pt-16 pb-8 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-left">
            <div>
              <h4 className="text-[#D4AF37] font-black text-xl mb-6 tracking-tighter uppercase">Gratuity Calculator UAE</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                MOHRE-compliant end of service calculator for UAE employees. Providing 100% accurate results based on 2026 Labor Law.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/uae-labour-law" className="hover:text-[#D4AF37]">Full Labour Law</Link></li>
                <li><Link href="/guides" className="hover:text-[#D4AF37]">Claim Process</Link></li>
                <li><Link href="/blog" className="hover:text-[#D4AF37]">Legal Blog</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4AF37]">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/jafza-calculator" className="hover:text-[#D4AF37]">JAFZA Gratuity</Link></li>
                <li><Link href="/domestic-workers" className="hover:text-[#D4AF37]">Domestic Help</Link></li>
                <li><Link href="/dubai" className="hover:text-[#D4AF37]">Dubai Mainland</Link></li>
                <li><Link href="/abu-dhabi" className="hover:text-[#D4AF37]">Abu Dhabi Laws</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal Updates</h4>
              <p className="text-gray-500 text-xs mb-4">Subscribe to get latest updates on UAE Federal Decree-Law No. 33 of 2021.</p>
              <div className="flex bg-[#002d5a] p-1 rounded-xl border border-white/5">
                <input type="email" placeholder="Email" className="bg-transparent p-2 text-xs text-white outline-none w-full" />
                <button className="bg-[#D4AF37] text-[#001f3f] px-4 py-2 rounded-lg font-bold text-xs uppercase">Join</button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
            © 2026 Gratuity Calculator UAE - All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}