type ClickParams = { clickedPage: number };

export interface Props {
    currentPage: number;
    maxPage?: number;
    minPage?: number;
    onPageClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        params: ClickParams
    ) => void;
}
