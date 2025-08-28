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

const TOTAL_PAGES = 3;
const MIN_PAGE = 1;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: [top] 14vh 9vh [pagination-label] 18vh 13vh [pagination-navigation] 10vh 5vh [pagination-content] 15vh;
    width: 100vw;
    max-height: 100vh;
    position: relative;
    /* padding-top: 9vh; */
    align-items: center;
    overflow: hidden;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    color: #42567a;
    margin: 0;
`;

const TitleContainer = styled.div`
    grid-column: 6 / span 5;
    grid-row-start: top;
`;

const TitleDividerContainer = styled.div`
    grid-column-start: 5;
    grid-row-start: top;
`;

const PaginationLabelContainer = styled.div`
    grid-column: 2 / -1;
    grid-row-start: pagination-label;
`;

const PaginationArrowsContainer = styled.div`
    grid-column: 6 / span 2;
    grid-row-start: pagination-navigation;
`;

const PaginationContentContainer = styled.div`
    grid-column: 6 / -4;
    grid-row-start: pagination-content;
`;

const PaginationNumbersContainer = styled.div`
    grid-row: top / span 6;
    grid-column: 10 / span 8;
    justify-self: center;
    align-self: center;
`;

const NavigationArrow = styled(Button)`
    grid-row-start: pagination-content;
    justify-self: center;
`;

const NavigationPrev = styled(NavigationArrow)`
    grid-column-start: 5;
`;

const NavigationNext = styled(NavigationArrow)`
    grid-column-start: -4;
`;

const IconCentered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BackgroundSvgContainer = styled.div`
    grid-row: 1 / -1;
    grid-column: 5 / -3;
`;

const DESCRIPTION_MOCK =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quo tempore facilis accusamus totam harum maxime hic ullam. Commodi tempore reprehenderit temporibus ea inventore a alias nihil quo earum dignissimos?';

export const Pagination: FunctionComponent<Props> = ({ title }) => {
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
                    minPage={MIN_PAGE}
                    labels={[
                        { left: '1993', right: '1999' },
                        { left: '2000', right: '2003' },
                        { left: '2004', right: '2022' },
                    ]}
                />
            </PaginationLabelContainer>
            <PaginationArrowsContainer>
                <PaginationArrows
                    currentPage={page}
                    maxPage={TOTAL_PAGES}
                    minPage={MIN_PAGE}
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
                    <BackArrow />
                </IconCentered>
            </NavigationPrev>
            <PaginationContentContainer>
                <PaginationContent
                    freeMode
                    grabCursor
                    // navigation
                    navigation={{
                        prevEl: '.nav-arrow-prev',
                        nextEl: '.nav-arrow-next',
                    }}
                    slidesPerView={3}
                    modules={[Keyboard, Navigation, FreeMode]}
                    currentPage={page}
                    contents={[
                        [
                            { label: '1993', description: DESCRIPTION_MOCK },
                            { label: '1994', description: DESCRIPTION_MOCK },
                        ],
                        [
                            { label: '2000', description: DESCRIPTION_MOCK },
                            { label: '2001', description: DESCRIPTION_MOCK },
                            { label: '2002', description: DESCRIPTION_MOCK },
                            { label: '2003', description: DESCRIPTION_MOCK },
                        ],
                        [{ label: '2007', description: DESCRIPTION_MOCK }],
                    ]}
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
                    minPage={MIN_PAGE}
                    maxPage={TOTAL_PAGES}
                    currentPage={page}
                    onPageClick={(_, { clickedPage }) => setPage(clickedPage)}
                />
            </PaginationNumbersContainer>
        </Container>
    );
};
