import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import ShoppingCart from '@components/icons/shopping-cart';

import {
  GlobalHeader,
  HeaderLink,
  HeaderLogo,
  HeaderTopNav,
  HeaderWrapper,
} from './index.style';

export default function Header() {
  const { asPath } = useRouter();

  return (
    <GlobalHeader>
      <HeaderWrapper>
        <HeaderTopNav>
          <div>
            <Link href="/">
              <HeaderLogo>29CM</HeaderLogo>
            </Link>
            <Link href="/products">
              <HeaderLink active={asPath.startsWith('/products')}>
                쇼핑하러가기
              </HeaderLink>
            </Link>
          </div>
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
