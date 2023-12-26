import React, { ReactNode } from 'react';
import Providers from '@/providers';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import DarkModeSwitch from '@/components/DarkModeSwitch';
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
        <Providers>
          <header>
            <LocaleSwitcher />
            <DarkModeSwitch />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
