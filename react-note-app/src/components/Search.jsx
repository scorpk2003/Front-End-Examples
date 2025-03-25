import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearch }) => {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em'></MdSearch>
            <input
                type='text'
                placeholder='Type to search...'
                onChange={(event) => handleSearch(event.target.value)}
            >
            </input>
        </div>
    )
}

export default Search;