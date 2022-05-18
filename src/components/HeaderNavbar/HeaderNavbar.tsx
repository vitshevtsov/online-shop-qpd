import React from 'react';
import { Link } from 'react-router-dom';
import CartToggler from 'components/CartToggler/CartToggler';
import SearchInput from 'components/SearchInput/SearchInput';
import SideMenuToggler from 'components/SideMenuToggler/SideMenuToggler';

const HeaderNavbar = () => {
    return (
        <nav className="navbar navbar-light d-flex w-75 mx-auto">
            <div className="row w-100 ps-5">
                <div className="col-3 text-center">
                    <Link
                        to="main"
                        className="btn btn-md btn-outline-light me-3"
                    >Главная
                    </Link>
                    <SideMenuToggler />
                </div>
                <div className="col-6 text-center">
                    <SearchInput />
                </div>
                <div className="col-3 text-center">
                    <Link
                        to="orders"
                        className="btn btn-md btn-outline-light me-3"
                    >Заказы
                    </Link>
                    <CartToggler/>
                </div>
            </div>  
        </nav>
    );
};

export default HeaderNavbar;
