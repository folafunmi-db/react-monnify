import React, {ReactNode} from 'react';
import useMonnifyPayment from './use-monnify';
import {MonnifyProps} from './types';

export interface MonnifyButtonProps extends MonnifyProps {
  text?: string;
  className?: string;
  children?: ReactNode;
  onComplete?: Function;
  onClose?: Function;
}

const MonnifyButton = ({
  text,
  className,
  children,
  onComplete,
  onClose,
  ...others
}: MonnifyButtonProps): JSX.Element => {
  const initializePayment = useMonnifyPayment(others);
  return (
    <button className={className} onClick={(): void => initializePayment(onComplete, onClose)}>
      {text || children}
    </button>
  );
};

export default MonnifyButton;
