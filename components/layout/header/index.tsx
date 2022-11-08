import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import ShoppingCart from '@components/icons/shopping-cart';

import {
  GlobalHeader,
  HeaderLink,
  HeaderTopNav,
  HeaderWrapper,
} from './index.style';

export default function Header() {
  const { asPath } = useRouter();

  return (
    <GlobalHeader>
      <HeaderWrapper>
        <HeaderTopNav>
          <Link href="/">
            <HeaderLink>29CM</HeaderLink>
          </Link>
          <Link href="/products">
            <HeaderLink active={asPath.startsWith('/products')}>
              쇼핑하러가기
            </HeaderLink>
          </Link>
          <Link href="/cart">
            <HeaderLink active={asPath.startsWith('/cart')}>
              <ShoppingCart />
            </HeaderLink>
          </Link>
        </HeaderTopNav>
      </HeaderWrapper>
    </GlobalHeader>
  );
}
