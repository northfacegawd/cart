import React from 'react';

import {
  ButtonSkeleton,
  ImageSkeleton,
  NameSkeleton,
  PriceSkeleton,
  SkeletonWrapper,
} from './index.style';

export default function ProductSkeleton() {
  return (
    <SkeletonWrapper>
      <ImageSkeleton />
      <NameSkeleton />
      <PriceSkeleton />
      <ButtonSkeleton />
    </SkeletonWrapper>
  );
}
