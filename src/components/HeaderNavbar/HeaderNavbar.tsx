import React from 'react';
import { Link } from 'react-router-dom';
import CartToggler from 'components/CartToggler/CartToggler';
import SearchInput from 'components/SearchInput/SearchInput';
import SideMenuToggler from 'components/SideMenuToggler/SideMenuToggler';

const HeaderNavbar = () => {
    return (
    // <div className="container">
    //     <nav className="navbar navbar-light d-flex">
    //         <Link
    //             to="main"
    //             className="btn btn-md btn-outline-light me-3"
    //         >Главная
    //         </Link>
    //         <SideMenuToggler />
    //         <Link
    //             to="orders"
    //             className="btn btn-md btn-outline-light me-3"
    //         >Заказы
    //         </Link>
    //     </nav>
    //     <SearchInput />
    //     <CartToggler/>
    // </div>

  
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container align-items-center">
                <Link
                    to="main"
                    className="navbar-brand"
                >Online<span className="text-warning">Shop</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="main"
                                className="nav-link text-light"
                            >Главная
                            </Link>
                        </li>
                        <li className="nav-item">
                            <SideMenuToggler />
                        </li>
                        <li className="nav-item">
                            <Link
                                to="orders"
                                className="nav-link text-light"
                            >Заказы
                            </Link>
                        </li>
                    </ul>
                    <SearchInput />
                    <CartToggler/>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNavbar;
