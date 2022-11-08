import React, { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header />
      <main>{children}</main>
    </>
  );
}
