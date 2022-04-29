import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    
    const handleOnKeyPress = (e: any) => {
        if (e.code === 'Enter') {
            navigate('searchresult', {state: searchQuery});
        }
    };

    return (
        <div className="input-group">
            <input
                type="input"
                className="form-control"
                placeholder="Поиск по товарам"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleOnKeyPress}
            />
            {searchQuery && <Link 
                to="searchresult"
                state={searchQuery}
                className="btn btn-outline-light"
                type="button"
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>}
        </div>
    );
};

export default SearchInput;
