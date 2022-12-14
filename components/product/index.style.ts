import Image from 'next/image';

import FadeInImage from '@components/common/fadein-image';
import styled from '@emotion/styled';

export const ProductWrapper = styled.li`
  display: inline-block;
  cursor: pointer;
  width: 260px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: inherit;
  height: 320px;
`;

export const ProductImage = styled(FadeInImage)`
  top: 0;
  left: 0;
  transition-duration: 200ms, 400ms;
  transition-property: transform, opacity;
  will-change: transform, opacity;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductInfo = styled.p`
  margin: 0;
  padding: 1em;
`;

export const ProductName = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.3em;
  color: var(--gray-600);
  height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProductPrice = styled.span`
  display: block;
  margin-top: 0.5em;
  font-size: 1.05rem;
  font-weight: 500;
`;

export const CartButton = styled.button`
  margin-top: auto;
  cursor: pointer;
  width: 100%;
  padding: 1em 0;
  background-color: black;
  color: #fff;
  transition: all 200ms ease-out;
  outline: none;
  border: none;

  &:hover {
    background-color: var(--primary);
  }
`;
