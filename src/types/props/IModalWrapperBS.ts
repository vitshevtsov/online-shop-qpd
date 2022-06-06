import { ReactNode } from "react";

export interface IModalWrapperBS {
    id: string;
    labelId: string;
    title: string;
    body: ReactNode;
    footer: ReactNode;
    classNameSize?: string;
    classNameContent?: string;
    classNameHeader?: string;
    classNameTitle?: string;
    classNameBody?: string;
    classNameFooter?: string;
}
