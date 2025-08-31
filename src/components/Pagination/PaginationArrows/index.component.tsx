import { FunctionComponent } from 'react';
import { Props } from './index.types';
import { Button } from '@/uikit/Button';
import FrontArrow from '@/assets/icons/front-arrow.svg';
import BackArrow from '@/assets/icons/back-arrow.svg';
import { DEFAULT_MAX_PAGE, DEFAULT_MIN_PAGE } from '../index.constants';
import styled from 'styled-components';
import { MAX_MOBILE_SCREEN_SIZE } from '@/config';

const IconCentered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Navigation = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        gap: 8px;
        margin-top: 10px;
    }
`;

const PagesCounter = styled.div`
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--color-black-blue);
`;

export const PaginationArrows: FunctionComponent<Props> = ({
    currentPage,
    maxPage,
    minPage,
    onNextPageClick,
    onPrevPageClick,
}) => {
    const numbersFormatter = new Intl.NumberFormat('ru-RU', {
        minimumIntegerDigits: 2,
    });

    maxPage = maxPage ?? DEFAULT_MAX_PAGE;
    minPage = minPage ?? DEFAULT_MIN_PAGE;

    return (
        <div>
            <PagesCounter>
                {numbersFormatter.format(currentPage)}/
                {numbersFormatter.format(maxPage)}
            </PagesCounter>
            <Navigation>
                <Button
                    disabled={currentPage === minPage}
                    onClick={(event) => {
                        if (onPrevPageClick)
                            onPrevPageClick(event, {
                                minPage,
                                maxPage,
                                currentPage,
                            });
                    }}
                >
                    <IconCentered>
                        <BackArrow />
                    </IconCentered>
                </Button>
                <Button
                    disabled={currentPage === maxPage}
                    onClick={(event) => {
                        if (onNextPageClick)
                            onNextPageClick(event, {
                                minPage,
                                maxPage,
                                currentPage,
                            });
                    }}
                >
                    <IconCentered>
                        <FrontArrow />
                    </IconCentered>
                </Button>
            </Navigation>
        </div>
    );
};
