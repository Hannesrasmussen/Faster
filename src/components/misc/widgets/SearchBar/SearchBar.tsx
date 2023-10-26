import React, {useState, useEffect} from 'react'

import './SearchBar.css'

interface ISearchBar {
    function: Function
}

function SearchBar(props: ISearchBar) {

    const [searchState, setSearchState] = useState<string>('');

    useEffect(() => {
        props.function(searchState);
    }, [searchState]);

    function updateSearchValue(e:any) {
        setSearchState(e.target.value)
    }

    function callSnippets(){
        // Do nothing for now
    }

    return (
        <div id='searchbar'>
            <input 
                onChange={function(e){updateSearchValue(e)}} 
                value={searchState} 
                placeholder='Ex.. CSS Custom toolbar'
            />
        </div>
    )
}

export default SearchBar
