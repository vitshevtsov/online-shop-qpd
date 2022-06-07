import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from 'components/Main/Main';
import Orders from 'components/Orders/Orders';
import Category from 'components/Category/Category';
import SearchResult from 'components/SearchResult/SearchResult';
import NoMatchRoute from 'components/NoMatchRoute/NoMatchRoute';

const RoutesComponent = () => {
    
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate
                    to="main"
                    replace
                />}
            />
            <Route
                path="main"
                element={<Main />}
            />
            <Route
                path="orders"
                element={<Orders />}
            />
            <Route
                path="searchresult"
                element={<SearchResult />}
            />
            <Route
                path="*"
                element={<NoMatchRoute />}
            />
            <Route
                path="/category/:id"
                element={<Category />}
            />
        </Routes>
    );
};

export default RoutesComponent;
