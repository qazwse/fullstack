import React from 'react';

const Search = ({searchTerm, handleSearchTermChange}) => {
    const searchSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={searchSubmit}>
            <div>
                search: <input value={searchTerm} onChange={handleSearchTermChange}/>
            </div>
        </form>
    )
}
 
export default Search;