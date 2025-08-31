import { FunctionComponent, useRef } from 'react';
import { Props } from './index.types';
import { Button } from '@/uikit/Button';
import { genNumbersRange } from '@/utils/genNumbersRange';
import { DEFAULT_MAX_PAGE, DEFAULT_MIN_PAGE } from '../../index.constants';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 10px;
`;

const ButtonStyled = styled(Button)<{ selected?: boolean }>`
    ${({ selected }) => !selected && 'opacity: 0.4'};
    overflow: hidden;
    width: 6px;
    padding: 0;
    transition: width 0.2s, background-color 0.2s;
    background-color: var(--color-black-blue);
    transition: opacity 0.2s;
`;

export const PaginationNumbersMobile: FunctionComponent<Props> = ({
    currentPage,
    maxPage,
    minPage,
    onPageClick,
}) => {
    maxPage = maxPage ?? DEFAULT_MAX_PAGE;
    minPage = minPage ?? DEFAULT_MIN_PAGE;

    return (
        <Container>
            {[...genNumbersRange(minPage, maxPage)].map((page) => (
                <ButtonStyled
                    key={page}
                    selected={currentPage === page}
                    onClick={(event) => {
                        if (onPageClick)
                            onPageClick(event, { clickedPage: page });
                    }}
                >
                    {page}
                </ButtonStyled>
            ))}
        </Container>
    );
};
