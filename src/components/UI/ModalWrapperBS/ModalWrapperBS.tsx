import React from 'react';
import { IModalWrapperBS } from 'types/props/IModalWrapperBS';


const ModalWrapperBS = (props: IModalWrapperBS) => {
    return (
        <div
            className="modal fade"
            id={props.id}
            tabIndex={-1}
            aria-labelledby={props.labelId}
            aria-hidden="true"
        >
            <div className={"modal-dialog " + props.classNameSize}>
                <div className={"modal-content " + props.classNameContent}>
                    <div className={"modal-header " + props.classNameHeader}>
                        <h5
                            className={"modal-title " + props.classNameTitle}
                            id={props.labelId}
                        >{props.title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                        </button>
                    </div>
                    <div className={"modal-body " + props.classNameBody}>
                        {props.body}
                    </div>
                    <div className={"modal-footer " + props.classNameFooter}>
                        {props.footer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWrapperBS;
