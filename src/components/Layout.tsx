import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import LightHeader from './LightHeader';
import LightFooter from './LightFooter';

interface LayoutProps {
  children: ReactNode;
  variant?: 'dark' | 'light';
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export default function Layout({ children, variant = 'dark', hideHeader = false, hideFooter = false }: LayoutProps) {
  if (variant === 'light') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
        {!hideHeader && <LightHeader />}
        <main className={!hideHeader ? "pt-16" : ""}>
          {children}
        </main>
        {!hideFooter && <LightFooter />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {!hideHeader && <Header />}
      <main className={!hideHeader ? "pt-16" : ""}>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}