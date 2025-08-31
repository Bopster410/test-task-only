import { FunctionComponent, useRef } from 'react';
import { Props } from './index.types';
import { DEFAULT_MIN_PAGE } from '../index.constants';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MAX_MOBILE_SCREEN_SIZE } from '@/config';

const Label = styled.div`
    font-weight: 700;
    font-size: 12.5rem;
    line-height: 80%;
    letter-spacing: -0.02em;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 4rem;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        font-size: clamp(3.5rem, 0.2857rem + 16.0714vw, 8rem);
        gap: 2rem;
    }
`;

const LabelLeft = styled.span`
    color: var(--color-blue);
`;

const LabelRight = styled.span`
    color: var(--color-fuschia);
`;

export const PaginationLabel: FunctionComponent<Props> = ({
    currentPage,
    labels,
    minPage,
}) => {
    minPage = minPage ?? DEFAULT_MIN_PAGE;

    const currentPageRelative = currentPage - minPage;

    const { left, right } =
        currentPageRelative >= 0 && currentPageRelative < labels.length
            ? labels[currentPageRelative]
            : labels[0];

    const labelLeftRef = useRef(null);
    const labelRightRef = useRef(null);
    useGSAP(() => {
        gsap.to(labelLeftRef.current, {
            innerText: left,
            duration: 1,
            snap: { innerText: 1 },
        });
        gsap.to(labelRightRef.current, {
            innerText: right,
            duration: 1,
            snap: { innerText: 1 },
        });
    }, [left, right]);

    return (
        <Label>
            <LabelLeft ref={labelLeftRef} />
            <LabelRight ref={labelRightRef} />
        </Label>
    );
};
