import { FunctionComponent } from 'react';
import { Props } from './index.types';
import { DEFAULT_MIN_PAGE } from '../index.constants';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ContentCard } from './ContentCard';

import styled from 'styled-components';

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px;
`;

export const PaginationContent: FunctionComponent<Props & SwiperProps> = ({
    currentPage,
    contents,
    minPage,
    ...props
}) => {
    minPage = minPage ?? DEFAULT_MIN_PAGE;

    const currentPageRelative = currentPage - minPage;
    const currentContent =
        currentPageRelative >= 0 && currentPageRelative < contents.length
            ? contents[currentPageRelative]
            : contents[0];

    return (
        <Swiper {...props}>
            {currentContent.map(({ label, description }) => (
                <SwiperSlide>
                    <ContentCard
                        label={label}
                        description={description}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
