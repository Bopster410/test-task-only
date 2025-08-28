import { FunctionComponent } from 'react';
import { Props } from './index.types';
import { DEFAULT_MIN_PAGE } from '../index.constants';
import styled from 'styled-components';

const Label = styled.div`
    font-weight: 700;
    font-size: 200px;
    line-height: 80%;
    letter-spacing: -0.02em;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 4rem;
`;

const LabelLeft = styled.span`
    color: #5d5fef;
`;

const LabelRight = styled.span`
    color: #ef5da8;
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
    return (
        <Label>
            <LabelLeft>{left}</LabelLeft>
            <LabelRight>{right}</LabelRight>
        </Label>
    );
};
