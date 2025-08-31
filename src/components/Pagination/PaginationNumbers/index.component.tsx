import { FunctionComponent, useRef } from 'react';
import { Props } from './index.types';
import styled from 'styled-components';
import { PaginationNumbersDesktop } from './PaginationNumbersDesktop';
import { MAX_MOBILE_SCREEN_SIZE } from '@/config';
import { PaginationNumbersMobile } from './PaginationNumbersMobile';

const Container = styled.div``;
const DesktopContainer = styled.div`
    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        display: none;
    }
`;
const MobileContainer = styled.div`
    display: none;
    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        display: inline-block;
    }
`;

export const PaginationNumbers: FunctionComponent<Props> = (props) => {
    return (
        <Container>
            <DesktopContainer>
                <PaginationNumbersDesktop {...props} />
            </DesktopContainer>
            <MobileContainer>
                <PaginationNumbersMobile {...props} />
            </MobileContainer>
        </Container>
    );
};
