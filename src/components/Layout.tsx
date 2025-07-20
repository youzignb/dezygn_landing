import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import LightHeader from './LightHeader';
import LightFooter from './LightFooter';

interface LayoutProps {
  children: ReactNode;
  variant?: 'dark' | 'light';
}

export default function Layout({ children, variant = 'dark' }: LayoutProps) {
  if (variant === 'light') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
        <LightHeader />
        <main className="pt-16">
          {children}
        </main>
        <LightFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}