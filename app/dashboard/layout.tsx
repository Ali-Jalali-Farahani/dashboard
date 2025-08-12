// app/layout.tsx
'use client';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface LayoutProps {
  children: ReactNode;
}

const localStorageProvider = (): Map<string,object> => {
    
  if (typeof window === 'undefined') {
    return new Map(); // نسخه خالی برای سرور
  }

  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]')) as Map<string,object>;

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('app-cache', JSON.stringify(Array.from(map.entries())));
  });

  return map;
};

export default function Layout({ children }: LayoutProps) {
  const SWRConfigDynamic = dynamic(
    () => import('swr').then((mod) => mod.SWRConfig),
    { ssr: false }
  );

  return (
    <SWRConfigDynamic value={{ provider: localStorageProvider }}>
      {children}
    </SWRConfigDynamic>
  );
}