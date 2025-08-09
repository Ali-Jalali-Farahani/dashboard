'use client';
// components/SWRProvider.js
import { SWRConfig } from 'swr';
import localStorageProvider from '@/Utility/swrPersist';

export default function SWRProvider({ children }) {
  return (
    <SWRConfig value={{ provider: localStorageProvider }}>
      {children}
    </SWRConfig>
  );
}