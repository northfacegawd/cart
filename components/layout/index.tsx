import React, { PropsWithChildren } from 'react';

import Header from './header';
import { Main } from './index.style';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
