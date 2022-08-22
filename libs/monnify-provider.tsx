import React from 'react';
import MonnifyContext from './monnify-context';
import useMonnifyPayment from './use-monnify';
import {MonnifyProps} from './types';

interface MonnifyProviderProps extends MonnifyProps {
  children: JSX.Element;
  onComplete: Function;
  onClose: Function;
}

const MonnifyProvider = ({
  children,
  onComplete,
  onClose,
  ...others
}: MonnifyProviderProps): JSX.Element => {
  const initializePayment = useMonnifyPayment(others);
  return (
    <MonnifyContext.Provider value={{initializePayment, onComplete, onClose}}>
      {children}
    </MonnifyContext.Provider>
  );
};

export default MonnifyProvider;
