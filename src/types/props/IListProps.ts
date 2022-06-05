import { MutableRefObject } from "react";

export interface IListProps {
    items: unknown[];
    renderItem: (arg: any) => React.ReactNode; // оставил any тк компонент Лист универсальный, мб что угодно
    paginationLimit?: number;
    titleRef?: MutableRefObject<HTMLDivElement | null>
}
