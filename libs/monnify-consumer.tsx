import React, {forwardRef, useContext, FunctionComponentElement} from 'react';
import MonnifyProvider from './monnify-provider';
import {MonnifyProps} from './types';
import MonnifyContext from './monnify-context';

interface MonnifyConsumerProps extends MonnifyProps {
  children: Function;
  onComplete?: Function;
  onClose?: Function;
}

const MonnifyConsumerChild = ({
  children,
  ref,
}: {
  children: Function;
  ref: any;
}): FunctionComponentElement<any> => {
  const {initializePayment, onComplete, onClose} = useContext(MonnifyContext);
  const completeInitializePayment = (): void => initializePayment(onComplete, onClose);
  return children({initializePayment: completeInitializePayment, ref});
};

const MonnifyConsumer = forwardRef(
  (
    {children, onComplete: paraComplete, onClose: paraClose, ...others}: MonnifyConsumerProps,
    ref: any,
  ): JSX.Element => {
    const onComplete = paraComplete ? paraComplete : (): any => null;
    const onClose = paraClose ? paraClose : (): any => null;
    return (
      <MonnifyProvider {...others} onComplete={onComplete} onClose={onClose}>
        <MonnifyConsumerChild ref={ref}>{children}</MonnifyConsumerChild>
      </MonnifyProvider>
    );
  },
);

export default MonnifyConsumer;
