import React from 'react';
import { Link } from 'react-router-dom';
import CartToggler from '../CartToggler/CartToggler';
import SideMenuToggler from '../SideMenuToggler/SideMenuToggler';
import styles from './Header.module.css';

const Header: React.FC = ({ children }) => (
    <header className={styles.header}>
        <div className="container-fluid align-items-center">
            <div className="row">
                <div className="col-4">
                    <Link to="main" className="btn btn-sm btn-outline-light me-3">Главная</Link>
                    <SideMenuToggler />
                </div>
                <div className="col-6">
                    <input type="input" className="form-control" id="exampleFormControlInput1" placeholder="Поиск по товарам" />

                </div>
                <div className="col-2">
                    <Link to="orders" className="btn btn-sm btn-outline-light me-3">Заказы</Link>
                    <CartToggler/>
                </div>
            </div>
            {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}

        </div>
        {/* todo сделать navbar в children */}
        {children}
    </header>
);

export default Header;
