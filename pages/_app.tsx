import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@components/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;

if (typeof window === 'undefined') {
  (async () => {
    const { server } = await import('@mocks/server');
    server.listen();
  })();
} else {
  (async () => {
    const { worker } = await import('@mocks/browser');
    worker.start();
  })();
}
