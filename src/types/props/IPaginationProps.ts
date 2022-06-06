import React from "react";

export interface IPaginationProps {
    items: unknown[];
    limit: number;
    activePage: number;
    onClickPageNum: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onClickPagePrev: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onClickPageNext: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
