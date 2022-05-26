export interface IListProps {
    items: unknown[];
    renderItem: (arg: any) => React.ReactNode;
    paginationLimit?: number;
}