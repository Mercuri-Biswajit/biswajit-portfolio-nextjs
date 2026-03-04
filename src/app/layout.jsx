import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Er. Biswajit Deb Barman | Civil Engineer – Raiganj, West Bengal',
  description: 'Civil & Structural Engineer in Raiganj, Uttar Dinajpur. Expert in RCC design, IS 456:2000, WB PWD BOQ, cost estimation for residential and commercial projects across North Bengal.',
  keywords: ['civil engineer raiganj', 'structural engineer west bengal', 'RCC design', 'BOQ estimation', 'construction engineer north bengal'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
