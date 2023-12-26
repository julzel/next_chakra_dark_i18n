import React, { ReactNode } from 'react';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import '../globals.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <html lang={locale}>
      <body>
        <header>
          <LocaleSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}
