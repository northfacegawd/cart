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
