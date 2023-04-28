import React from 'react';
interface Props extends React.HTMLAttributes<HTMLLabelElement> {
    /**
     * Applies specific styles for checkboxes
     */
    check?: boolean;
    /**
     * Applies specific styles for radios
     */
    radio?: boolean;
    /**
     * Defines if the label is disabled (you should still disable child elements)
     */
    disabled?: boolean;
}
declare const Label: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLLabelElement>>;
export default Label;
//# sourceMappingURL=Label.d.ts.map