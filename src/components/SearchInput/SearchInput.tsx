import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="input-group">
            <input
                type="input"
                className="form-control"
                placeholder="Поиск по товарам"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && <Link 
                to="searchresult"
                state={searchQuery}
                className="btn btn-outline-light"
                type="button"
            >
                Поиск
            </Link>}
            
        </div>
    );
};

export default SearchInput;