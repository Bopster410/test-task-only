import { Variant, Size } from './index.types';

export const TEXT_COLORS: {
    [name in Variant]: string;
} = {
    white: '#3877ee',
    grey: '#42567a',
};

export const SIZE: {
    [name in Size]: string;
} = {
    lg: '50px',
    sm: '40px',
};

export const DEFAULT_VARIANT: Variant = 'grey';
export const DEFAULT_SIZE: Size = 'lg';
