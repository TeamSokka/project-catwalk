import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const Search = (props) => {
  // const [search, setSearch] = useState('');
  return (
    <div className='search'>
      <input type='text' id='search' value={props.search}
      style={{ width:'300px' }}
      onChange={(e) => props.handleChange(e)}
      placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
      <BiSearchAlt onClick={props.onSearch} />
    </div>
  )
}

export default Search;

// onClick={props.onSearch}