import { FunctionComponent, useRef, useState } from 'react';
import { Props } from './index.types';
import { DEFAULT_MIN_PAGE } from '../index.constants';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ContentCard } from './ContentCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styled from 'styled-components';
import { MAX_MOBILE_SCREEN_SIZE } from '@/config';

const SwiperMobileOverflowVisible = styled(Swiper)`
    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        overflow: visible;
    }
`;

const EmptyMessage = styled.div`
    font-size: 2rem;
    color: var(--color-black-blue);
`;

export const PaginationContent: FunctionComponent<Props & SwiperProps> = ({
    currentPage,
    contents,
    minPage,
    ...props
}) => {
    const prevPageRef = useRef(currentPage);
    const [page, setPage] = useState(currentPage);

    const contentAreaRef = useRef(null);

    useGSAP(() => {
        if (prevPageRef.current !== currentPage) {
            gsap.to(contentAreaRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    setPage(currentPage);
                    prevPageRef.current = currentPage;
                },
            });
        }
    }, [currentPage]);

    useGSAP(() => {
        gsap.fromTo(
            contentAreaRef.current,
            {
                opacity: 0,
            },
            {
                ease: 'expo.in',
                duration: 0.5,
                opacity: 1,
            }
        );
    }, [page]);

    minPage = minPage ?? DEFAULT_MIN_PAGE;

    const currentPageRelative = page - minPage;
    const currentContent =
        currentPageRelative >= 0 && currentPageRelative < contents.length
            ? contents[currentPageRelative]
            : contents[0];

    return (
        <SwiperMobileOverflowVisible
            ref={contentAreaRef}
            {...props}
        >
            {currentContent.length === 0 && (
                <EmptyMessage>Тут пока что ничего нет!</EmptyMessage>
            )}
            {currentContent.map(({ label, description }) => (
                <SwiperSlide key={label}>
                    <ContentCard
                        label={label}
                        description={description}
                    />
                </SwiperSlide>
            ))}
        </SwiperMobileOverflowVisible>
    );
};
