import { PageContent } from './PaginationContent';
import { PageLabel } from './PaginationLabel';

export interface Props {
    title: string;
    contents: PageContent[];
    labels: PageLabel[];
    minPage: number;
    maxPage: number;
}
