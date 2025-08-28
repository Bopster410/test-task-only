import { FunctionComponent } from 'react';
import { Props } from './index.types';
import styled from 'styled-components';

const CardContainer = styled.div`
    max-width: 400px;
`;

const HeaderContainer = styled.div`
    margin-bottom: 15px;
`;

const Header = styled.h6`
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 120%;
    text-transform: uppercase;
    color: #3877ee;
    margin: 0;
`;

const DescriptionContainer = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const Description = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #42567a;
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
