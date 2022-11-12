import React, { CSSProperties, PropsWithChildren } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import {
  ModalBackdrop,
  ModalBackground,
  ModalContent,
  ModalWrapper,
} from './index.style';

export interface ModalConfig {
  backDropStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  enterDuration?: number;
  exitDuration?: number;
  disableClose?: boolean;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  config?: ModalConfig;
}

const conentStyleWithStatus: Partial<Record<TransitionStatus, CSSProperties>> =
  {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

const backDropStyleWithStatus: Partial<
  Record<TransitionStatus, CSSProperties>
> = { ...conentStyleWithStatus };

const Modal: React.FC<PropsWithChildren<ModalProps>> = function Modal({
  children,
  open,
  onClose,
  config,
}) {
  const enterDuration = config?.enterDuration;
  const exitDuration = config?.exitDuration;
  const backDropStyle = config?.backDropStyle;
  const contentStyle = config?.contentStyle;
  const disableClose = config?.disableClose;

  return (
    <ModalBackground>
      <Transition
        in={open}
        timeout={{ enter: enterDuration, exit: exitDuration }}
        mountOnEnter
        unmountOnExit
      >
        {(status) => (
          <ModalBackdrop
            style={{ ...backDropStyleWithStatus[status], ...backDropStyle }}
            onClick={disableClose ? undefined : onClose}
            id="modalBackdrop"
          />
        )}
      </Transition>
      <ModalWrapper>
        <Transition
          in={open}
          timeout={{ enter: enterDuration, exit: exitDuration }}
          unmountOnExit
          mountOnEnter
        >
          {(status) => (
            <ModalContent
              style={{ ...conentStyleWithStatus[status], ...contentStyle }}
              id="modalContent"
            >
              {children}
            </ModalContent>
          )}
        </Transition>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;

Modal.defaultProps = {
  config: {
    contentStyle: {},
    backDropStyle: {},
    enterDuration: 200,
    exitDuration: 200,
    disableClose: false,
  },
};
