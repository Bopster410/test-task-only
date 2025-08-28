import styled from 'styled-components';
import { ButtonProps } from './index.types';
import {
    DEFAULT_SIZE,
    DEFAULT_VARIANT,
    SIZE,
    TEXT_COLORS,
} from './index.config';

export const Button = styled.button<ButtonProps>`
    border-radius: 100%;
    background-color: #fff;
    color: ${({ variant }) => TEXT_COLORS[variant ?? DEFAULT_VARIANT]};
    border: ${({ variant }) =>
        (variant ?? DEFAULT_VARIANT) === 'grey'
            ? '1px solid rgba(66, 86, 122, 0.5)'
            : 'none'};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    width: ${({ size }) => SIZE[size ?? DEFAULT_SIZE]};
    aspect-ratio: 1;
    box-shadow: ${({ variant }) =>
        (variant ?? DEFAULT_VARIANT) === 'white'
            ? '0 0 15px 0 rgba(56, 119, 238, 0.2)'
            : 'none'};
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;
