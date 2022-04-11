import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main';
import Orders from './Orders';
import Category from './Category';
import SearchResult from './SearchResult';
import NoMatchRoute from './NoMatchRoute';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="main" replace />} />
            <Route path="main" element={<Main />} />
            <Route path="orders" element={<Orders />} />
            <Route path="category" element={<Category />} />
            <Route path="searchresult" element={<SearchResult />} />
            <Route path="*" element={<NoMatchRoute />} />
        </Routes>
    );
};

export default RoutesComponent;