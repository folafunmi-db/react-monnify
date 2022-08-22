import {createContext} from 'react';

type IMonnifyContext = {
  initializePayment: Function;
  onComplete: Function;
  onClose: Function;
};

const MonnifyContext = createContext<IMonnifyContext>({
  initializePayment: () => null,
  onComplete: () => null,
  onClose: () => null,
});

export default MonnifyContext;
