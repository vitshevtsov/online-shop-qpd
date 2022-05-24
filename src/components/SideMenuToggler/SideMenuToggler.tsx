import React from 'react';

const SideMenuToggler = () => {
    return (
        <a
            role="button"
            className="nav-link text-light"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            aria-controls="offcanvasExample"
        >Каталог
        </a>

    );
};

export default SideMenuToggler;