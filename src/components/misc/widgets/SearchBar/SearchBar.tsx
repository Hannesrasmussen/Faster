import React, {useState, useContext, useEffect} from 'react'

import './SearchBar.css'
import { Context } from '../../../../context/Context';

interface ISearchBar {
    function: Function
}

function SearchBar(props: ISearchBar) {

    const [searchState, setSearchState] = useState<string>('');

    useEffect(() => {
        props.function(searchState);
    }, [searchState]);

    const context = useContext(Context);
    if (!context) {
        // In case context is undefined. It never is... but.. y'know.. typescript
        return null;
    }

    function updateSearchValue(e:any) {
        setSearchState(e.target.value)
        context?.displayFeedbackModal('error', 'Search has not been added yet')
    }

    function callSnippets(){
        // Do nothing for now
    }

    return (
        <div id='searchbar'>
            <input 
                onChange={function(e){updateSearchValue(e)}} 
                value={searchState} 
                placeholder='Search..'
            />
        </div>
    )
}

export default SearchBar
