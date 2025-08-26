import BackArrow from '@/assets/icons/back-arrow.svg';
import './App.scss';
import styled from 'styled-components';

const Title = styled.h1`
    color: blue;
`;

export const App = () => {
    return (
        <div>
            <Title>Hello world!</Title>;
            <BackArrow style={{ color: 'red' }} />
        </div>
    );
};
