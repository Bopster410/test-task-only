type Label = {
    left: string;
    right: string;
};

export interface Props {
    currentPage: number;
    minPage?: number;
    labels: Label[];
}
