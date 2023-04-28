import React from 'react';
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * The type of the badge
     */
    type?: 'success' | 'danger' | 'warning' | 'neutral' | 'primary';
}
declare const Badge: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>>;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map