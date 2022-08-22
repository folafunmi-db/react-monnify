/// <reference types="react" />
import { MonnifyProps } from './types';
interface MonnifyProviderProps extends MonnifyProps {
    children: JSX.Element;
    onComplete: Function;
    onClose: Function;
}
declare const MonnifyProvider: ({ children, onComplete, onClose, ...others }: MonnifyProviderProps) => JSX.Element;
export default MonnifyProvider;
