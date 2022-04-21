import React from 'react';

const Cart = () => {
    return (
    // <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" id="myModal">Cart</div>
    // <div className="modal-dialog modal-fullscreen-sm-down" id="myModal">dfgffd</div>



        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Корзина</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-primary">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
