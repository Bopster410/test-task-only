type ClickParams = { clickedPage: number };

export interface Props {
    currentPage: number;
    maxPage?: number;
    minPage?: number;
    size: string;
    onPageClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        params: ClickParams
    ) => void;
}
