import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

export default function FadeInImage(props: ImageProps) {
  const [opacity, setOpacity] = useState<number>(0);
  const { style } = props;

  return (
    <Image
      onLoadingComplete={() => setOpacity(1)}
      style={{ opacity, ...style }}
      {...props}
    />
  );
}
