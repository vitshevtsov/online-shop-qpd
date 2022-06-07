import React from 'react';
import { IModalWrapperBS } from 'types/props/IModalWrapperBS';


const ModalWrapperBS = ({
    id,
    labelId,
    classNameSize,
    classNameContent,
    classNameHeader,
    classNameTitle,
    title,
    classNameBody,
    body,
    classNameFooter,
    footer
}: IModalWrapperBS) => {
    
    return (
        <div
            className="modal fade"
            id={id}
            tabIndex={-1}
            aria-labelledby={labelId}
            aria-hidden="true"
        >
            <div className={"modal-dialog " + classNameSize}>
                <div className={"modal-content " + classNameContent}>
                    <div className={"modal-header " + classNameHeader}>
                        <h5
                            className={"modal-title " + classNameTitle}
                            id={labelId}
                        >{title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                        </button>
                    </div>
                    <div className={"modal-body " + classNameBody}>
                        {body}
                    </div>
                    <div className={"modal-footer " + classNameFooter}>
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWrapperBS;
