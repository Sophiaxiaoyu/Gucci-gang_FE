import React from 'react';
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    /**
     * Defines the color of the input
     */
    valid?: boolean;
    /**
     * Defines if the input is disabled
     */
    disabled?: boolean;
    /**
     * Defines the type of the input
     */
    type?: string;
}
declare const Input: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map