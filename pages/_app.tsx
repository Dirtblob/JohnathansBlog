import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { GlobalProvider } from '@/context/GlobalContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}