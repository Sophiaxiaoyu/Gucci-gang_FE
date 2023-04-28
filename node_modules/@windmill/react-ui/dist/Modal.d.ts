import React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Function executed when the dropdown is closed
     */
    onClose: () => void;
    /**
     * Defines if the modal is open
     */
    isOpen: boolean;
}
declare const Modal: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map