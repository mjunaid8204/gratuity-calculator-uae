import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "UAE Gratuity Calculator 2026 | Official Labour Law Guide",
  description: "Calculate your end-of-service benefits based on the latest UAE Labour Law 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> 
        <main>{children}</main>
      </body>
    </html>
  );
}