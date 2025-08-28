import { FunctionComponent } from 'react';
import { Props } from './index.types';
import { Button } from '@/uikit/Button';

import { genNumbersRange } from '@/utils/genNumbersRange';
import { DEFAULT_MAX_PAGE, DEFAULT_MIN_PAGE } from '../index.constants';
import styled from 'styled-components';

const Container = styled.div<{ size: string }>`
    position: relative;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    /* border-radius: 50%; */
    /* aspect-ratio: 1; */

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        border: 1px solid #42567a;
        opacity: 0.2;
        border-radius: 50%;
        z-index: 0;
    }

    /* @media (max-width: 768px) {
        width: calc(${(props) => props.size} * 0.8);
        height: calc(${(props) => props.size} * 0.8);
    }

    @media (max-width: 480px) {
        width: calc(${(props) => props.size} * 0.6);
        height: calc(${(props) => props.size} * 0.6);
    } */
`;

const ButtonWrapper = styled.div<{
    index: number;
    total: number;
    size: string;
    selected?: boolean;
}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
        rotate(${(props) => (props.index * 360) / props.total}deg)
        translateY(calc(-1 * ${(props) => props.size} / 2))
        rotate(${(props) => -(props.index * 360) / props.total}deg);
    transform-origin: center;
    z-index: 1;
`;

const ButtonStyled = styled(Button)<{ selected?: boolean }>`
    ${({ selected }) => !selected && 'width: 1px'};
    ${({ selected }) => !selected && 'background-color: #42567a;'};
    overflow: hidden;
    transition: width 0.2s, background-color 0.2s;

    &:hover {
        width: 50px;
        background-color: #fff;
    }
`;

export const PaginationNumbers: FunctionComponent<Props> = ({
    currentPage,
    maxPage,
    minPage,
    onPageClick,
    size,
}) => {
    maxPage = maxPage ?? DEFAULT_MAX_PAGE;
    minPage = minPage ?? DEFAULT_MIN_PAGE;

    return (
        <Container size={size}>
            {genNumbersRange(minPage, maxPage).map((page, index) => (
                <ButtonWrapper
                    index={index}
                    total={maxPage - minPage + 1}
                    size={size}
                >
                    <ButtonStyled
                        selected={currentPage === page}
                        onClick={(event) => {
                            if (onPageClick)
                                onPageClick(event, { clickedPage: page });
                        }}
                    >
                        {page}
                    </ButtonStyled>
                </ButtonWrapper>
            ))}
        </Container>
    );
};
