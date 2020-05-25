import React, { useState } from 'react'

const Filter = ({nameFilter, handleFilterChange}) => {
    const filterSubmit = (event) => {
        event.preventDefault()
    }

    return ( 
        <form onSubmit={filterSubmit}>
        <div>
          search: <input value={nameFilter} onChange={handleFilterChange}/>
        </div>
      </form>
     );
}
 
export default Filter;