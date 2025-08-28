import { FunctionComponent } from 'react';
import { Props } from './index.types';
import styled from 'styled-components';

const StyledBackground = styled.svg`
    width: 100%;
    height: auto;
    max-height: 100%;
`;

export const PaginationBackground: FunctionComponent<Props> = ({}) => {
    return (
        <StyledBackground
            viewBox='0 0 1442 1080'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.1'
                d='M1 0V1080'
                stroke='#42567A'
            />
            <path
                opacity='0.1'
                d='M721 0V1080'
                stroke='#42567A'
            />
            <path
                opacity='0.1'
                d='M1441 0V1080'
                stroke='#42567A'
            />
            <path
                opacity='0.1'
                d='M1 480H1441'
                stroke='#42567A'
            />
        </StyledBackground>
    );
};
