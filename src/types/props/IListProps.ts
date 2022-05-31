import { MutableRefObject } from "react";

export interface IListProps {
    items: unknown[];
    renderItem: (arg: any) => React.ReactNode;
    paginationLimit?: number;
    titleRef?: MutableRefObject<HTMLDivElement | null>
}