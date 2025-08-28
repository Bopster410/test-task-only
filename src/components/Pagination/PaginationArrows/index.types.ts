type ClickParams = { minPage: number; maxPage: number; currentPage: number };

export interface Props {
    currentPage: number;
    maxPage?: number;
    minPage?: number;
    onNextPageClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        params: ClickParams
    ) => void;
    onPrevPageClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        params: ClickParams
    ) => void;
}
