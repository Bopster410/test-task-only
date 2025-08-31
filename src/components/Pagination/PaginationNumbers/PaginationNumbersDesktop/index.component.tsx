import { FunctionComponent, useRef } from 'react';
import { Props } from './index.types';
import { Button } from '@/uikit/Button';
import { genNumbersRange } from '@/utils/genNumbersRange';
import { DEFAULT_MAX_PAGE, DEFAULT_MIN_PAGE } from '../../index.constants';
import styled from 'styled-components';
import { calculateRotation } from './index.utils';
import { ROTATION_ANGLE } from './index.config';

const Container = styled.div<{ size: string }>`
    position: relative;
    width: ${({ size }) => size};
    height: ${({ size }) => size};

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
`;

const ButtonWrapper = styled.div<{
    index: number;
    total: number;
    size: string;
    selected?: boolean;
    rotation: number;
}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
        rotate(
            ${(props) => (props.index * 360) / props.total + props.rotation}deg
        )
        translateY(calc(-1 * ${(props) => props.size} / 2))
        rotate(
            ${(props) =>
                -((props.index * 360) / props.total + props.rotation)}deg
        );
    transform-origin: center;
    z-index: 1;
    transition: transform 0.7s ease;
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

export const PaginationNumbersDesktop: FunctionComponent<Props> = ({
    currentPage,
    maxPage,
    minPage,
    onPageClick,
    size,
}) => {
    maxPage = maxPage ?? DEFAULT_MAX_PAGE;
    minPage = minPage ?? DEFAULT_MIN_PAGE;

    const rotation = calculateRotation(
        currentPage,
        minPage,
        maxPage,
        ROTATION_ANGLE
    );

    return (
        <Container size={size}>
            {[...genNumbersRange(minPage, maxPage)].map((page, index) => (
                <ButtonWrapper
                    key={page}
                    index={index}
                    total={maxPage - minPage + 1}
                    size={size}
                    rotation={rotation}
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
