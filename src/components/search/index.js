import React from 'react';
import { Provider } from '../SearchProvider';
import SearchView from './SearchView';

function Search(props) {
    return (
        <Provider>
            <SearchView />
        </Provider>
    );
}

export default Search;