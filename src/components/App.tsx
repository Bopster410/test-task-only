import styled from 'styled-components';
import { Pagination } from './Pagination';

const AppGlobalStyled = styled.div`
    font-family: 'PT Sans', sans-serif;
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const App = () => {
    return (
        <AppGlobalStyled>
            <PaginationContainer>
                <Pagination title='Историчеcкие даты' />
            </PaginationContainer>
        </AppGlobalStyled>
    );
};
