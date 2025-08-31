import styled from 'styled-components';
import { Pagination } from './Pagination';
import { MAX_MOBILE_SCREEN_SIZE } from '@/config';
import { CONTENTS_MOCK, LABELS_MOCK, MIN_PAGE } from './index.constants';

const AppGlobalStyled = styled.div`
    font-family: 'PT Sans', sans-serif;
`;

const PaginationContainer = styled.div`
    height: 100vh;
    width: 100vw;
    padding-top: 10vh;
    padding-bottom: 10vh;

    @media (max-width: ${MAX_MOBILE_SCREEN_SIZE}px) {
        padding-bottom: 20px;
        max-width: 100vw;
        width: auto;
    }
`;

export const App = () => {
    return (
        <AppGlobalStyled>
            <PaginationContainer>
                <Pagination
                    title='Историчеcкие даты'
                    contents={CONTENTS_MOCK}
                    labels={LABELS_MOCK}
                    minPage={MIN_PAGE}
                    maxPage={CONTENTS_MOCK.length}
                />
            </PaginationContainer>
        </AppGlobalStyled>
    );
};
