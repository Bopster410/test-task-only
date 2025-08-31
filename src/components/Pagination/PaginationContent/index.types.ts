export type PageContent = { description: string; label: string }[];

export interface Props {
    currentPage: number;
    minPage?: number;
    contents: PageContent[];
}
