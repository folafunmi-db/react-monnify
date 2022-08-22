import { ReactNode } from 'react';
import { MonnifyProps } from './types';
export interface MonnifyButtonProps extends MonnifyProps {
    text?: string;
    className?: string;
    children?: ReactNode;
    onComplete?: Function;
    onClose?: Function;
}
declare const MonnifyButton: ({ text, className, children, onComplete, onClose, ...others }: MonnifyButtonProps) => JSX.Element;
export default MonnifyButton;
