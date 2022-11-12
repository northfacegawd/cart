import styled from '@emotion/styled';

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 1000;
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  transition: all 200ms ease-out;
  will-change: opacity;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  z-index: 1000;
  max-height: 100%;
  pointer-events: auto;
  background-color: white;
  padding: 1em;
  transition: all 200ms ease-out;
  transform: scale(0.8);
  opacity: 0;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
`;
