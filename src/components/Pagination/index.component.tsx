import { PaginationArrows } from './PaginationArrows';
import { PaginationNumbers } from './PaginationNumbers';
import { PaginationLabel } from './PaginationLabel';
import { PaginationContent } from './PaginationContent';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Props } from './index.types';
import { Button } from '@/uikit/Button';
import { FreeMode, Keyboard, Navigation } from 'swiper/modules';
import FrontArrow from '@/assets/icons/front-arrow.svg';
import BackArrow from '@/assets/icons/back-arrow.svg';
import { PaginationBackground } from './PaginationBackground';
import { PaginationTitleDivider } from './PaginationTitileDivider';
import { MAX_MOBILE_SCREEN_SIZE } from '@/config';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: [top] 15% 10% [pagination-label] 20% 15% [pagination-navigation] 15% 5% [pagination-content] 20%;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 100vh;
    position: relative;
    min-height: 800px;
    align-items: center;
    overflow: hidden;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        grid-template-rows: [top] auto 1fr [pagination-label] auto 1fr [pagination-divider] auto [pagination-content] auto 1fr [pagination-navigation] auto;
        grid-template-columns: 1fr auto 1fr;
        min-height: 500px;

        & > * {
            padding: 0 20px;
        }
    }
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 120%;
    color: var(--color-black-blue);
    margin: 0;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        font-size: clamp(1.25rem, 0.3571rem + 4.4643vw, 2.5rem);
    }
`;

const TitleContainer = styled.div`
    grid-column: 6 / span 5;
    grid-row-start: top;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        grid-column: 1 / span 2;
        max-width: 123px;
    }
`;

const TitleDividerContainer = styled.div`
    grid-column-start: 5;
    grid-row-start: top;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        display: none;
    }
`;

const PaginationLabelContainer = styled.div`
    grid-column: 2 / -1;
    grid-row-start: pagination-label;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        grid-column: 1 / span 3;
    }
`;

const PaginationArrowsContainer = styled.div`
    grid-column: 6 / span 2;
    grid-row-start: pagination-navigation;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        grid-column: 1 / span 3;
    }
`;

const PaginationContentContainer = styled.div`
    grid-column: 6 / -4;
    grid-row-start: pagination-content;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        grid-column: 1 / span 3;
    }
`;

const PaginationNumbersContainer = styled.div`
    grid-row: top / span 6;
    grid-column: 10 / span 8;
    justify-self: center;
    align-self: center;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        grid-column: 2;
        grid-row-start: pagination-navigation;
        padding: 0;
    }
`;

const NavigationArrow = styled(Button)`
    grid-row-start: pagination-content;
    justify-self: center;
`;

const NavigationPrev = styled(NavigationArrow)`
    grid-column-start: 5;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        display: none;
    }
`;

const NavigationNext = styled(NavigationArrow)`
    grid-column-start: -4;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        display: none;
    }
`;

const IconCentered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        display: none;
    }
`;

const BackgroundSvgContainer = styled.div`
    grid-row: 1 / -1;
    grid-column: 5 / -3;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        display: none;
    }
`;

const BackArrowStyled = styled(BackArrow)`
    width: 100%;
`;

const PaginationDividerContainer = styled.div`
    display: none;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        align-self: self-start;
        grid-row-start: pagination-divider;
        grid-column: 1 / -1;
        display: block;
    }
`;

const PaginationDivider = styled.hr`
    margin-top: 0;
    margin-bottom: 20px;
    opacity: 34%;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #c7cdd9;
    padding: 0;
`;

export const Pagination: FunctionComponent<Props> = ({
    title,
    contents,
    labels,
    minPage,
    maxPage,
}) => {
    const [page, setPage] = useState(1);
    return (
        <Container>
            <BackgroundSvgContainer>
                <PaginationBackground />
            </BackgroundSvgContainer>
            <TitleDividerContainer>
                <PaginationTitleDivider />
            </TitleDividerContainer>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <PaginationLabelContainer>
                <PaginationLabel
                    currentPage={page}
                    minPage={minPage}
                    labels={labels}
                />
            </PaginationLabelContainer>
            <PaginationArrowsContainer>
                <PaginationArrows
                    currentPage={page}
                    maxPage={maxPage}
                    minPage={minPage}
                    onPrevPageClick={(_, { minPage }) => {
                        if (page - 1 >= minPage)
                            setPage((curPage) => curPage - 1);
                    }}
                    onNextPageClick={(_, { maxPage }) => {
                        if (page + 1 <= maxPage)
                            setPage((curPage) => curPage + 1);
                    }}
                />
            </PaginationArrowsContainer>
            <NavigationPrev
                className='nav-arrow-prev'
                slot='container-start'
                variant='white'
                size='sm'
            >
                <IconCentered>
                    <BackArrowStyled />
                </IconCentered>
            </NavigationPrev>
            <PaginationDividerContainer>
                <PaginationDivider />
            </PaginationDividerContainer>
            <PaginationContentContainer>
                <PaginationContent
                    freeMode
                    grabCursor
                    navigation={{
                        prevEl: '.nav-arrow-prev',
                        nextEl: '.nav-arrow-next',
                    }}
                    slidesPerView={'auto'}
                    spaceBetween={'25px'}
                    modules={[Keyboard, Navigation, FreeMode]}
                    currentPage={page}
                    breakpoints={{
                        768: {
                            spaceBetween: '80px',
                        },
                    }}
                    contents={contents}
                />
            </PaginationContentContainer>
            <NavigationNext
                className='nav-arrow-next'
                slot='container-end'
                variant='white'
                size='sm'
            >
                <IconCentered>
                    <FrontArrow />
                </IconCentered>
            </NavigationNext>
            <PaginationNumbersContainer>
                <PaginationNumbers
                    size='530px'
                    minPage={minPage}
                    maxPage={maxPage}
                    currentPage={page}
                    onPageClick={(_, { clickedPage }) => setPage(clickedPage)}
                />
            </PaginationNumbersContainer>
        </Container>
    );
};
