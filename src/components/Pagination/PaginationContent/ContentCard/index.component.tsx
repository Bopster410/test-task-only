import { FunctionComponent } from 'react';
import { Props } from './index.types';
import styled from 'styled-components';
import { MAX_MOBILE_SCREEN_SIZE } from '@/config';

const CardContainer = styled.div`
    max-width: 400px;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        max-width: 170px;
    }
`;

const HeaderContainer = styled.div`
    margin-bottom: 15px;
`;

const Header = styled.h6`
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-size: 1.563rem;
    line-height: 120%;
    text-transform: uppercase;
    color: var(--color-blue);
    margin: 0;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        font-size: 1rem;
    }
`;

const DescriptionContainer = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        -webkit-line-clamp: 4;
    }
`;

const Description = styled.div`
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;
    color: var(--color-black-blue);

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        font-size: 0.875rem;
    }
`;

export const ContentCard: FunctionComponent<Props> = ({
    label,
    description,
}) => {
    return (
        <CardContainer>
            <HeaderContainer>
                <Header>{label}</Header>
            </HeaderContainer>
            <DescriptionContainer>
                <Description>{description}</Description>
            </DescriptionContainer>
        </CardContainer>
    );
};
