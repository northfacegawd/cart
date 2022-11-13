import { css } from '@emotion/react';
import styled from '@emotion/styled';

const skeletonCss = css`
  animation: skeleton-loading 1s linear infinite alternate;
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const SkeletonWrapper = styled.div`
  width: 260px;
  height: 460px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ImageSkeleton = styled.div`
  width: 100%;
  height: 320px;
  ${skeletonCss}
`;

export const NameSkeleton = styled.div`
  margin: 1em;
  height: 40px;
  width: 70%;
  ${skeletonCss}
`;

export const PriceSkeleton = styled.div`
  margin: 0 1em 1em 1em;
  height: 20px;
  width: 40%;
  ${skeletonCss}
`;

export const ButtonSkeleton = styled.div`
  width: 100%;
  height: 50px;
  ${skeletonCss}
`;
