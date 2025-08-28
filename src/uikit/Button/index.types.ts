import { PropsWithChildren } from 'react';

export type Variant = 'white' | 'grey';

export type Size = 'lg' | 'sm';

export interface ButtonProps
    extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
    variant?: Variant;
    size?: Size;
}
