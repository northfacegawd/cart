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
  // TEST는 node 환경에서 동작하므로 TEST에서만 msw사용하도록 변경
  (async () => {
    const { server } = await import('@mocks/server');
    server.listen();
  })();
}
