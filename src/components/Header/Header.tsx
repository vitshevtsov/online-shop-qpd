import React from 'react';
import SideMenuToggler from '../SideMenu/SideMenuToggler';
import styles from './Header.module.css';

const Header: React.FC = ({ children }) => (
    <header className={styles.header}>
        <div className="container-fluid align-items-center">
            <div className="row">
                <div className="col-3">
                    <SideMenuToggler />
                </div>
                <div className="col-7">
                    <input type="input" className="form-control" id="exampleFormControlInput1" placeholder="Поиск по товарам" />

                </div>
                <div className="col-2">
                    <button className="btn btn-sm btn-outline-light">
                        <p>Cart</p>
                    </button>
                </div>
            </div>
            {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}

        </div>

        {/* <div className={styles.logoAndNav}>
      <NavLink className={styles.logo} to="/tasks">ToDo List</NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#8FB6FF' : '',
        })}
        to="/tasks"
        className={styles.headerLink}
      >
        Задачи
      </NavLink>
      <div className={styles.divider} />
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? '#8FB6FF' : '',
        })}
        to="/categories"
        className={styles.headerLink}
      >
        Категории
      </NavLink>
    </div> */}
        {children}
    </header>
);

export default Header;
