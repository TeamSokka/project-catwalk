import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const Search = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log('search term ', search.length);
    onSearch(search);
  }

  return (
    <div className='search'>
      <input type='text' className='search-bar' value={search}
        style={{ width: '300px' }}
        onChange={(e) => handleSearch(e)}
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
      <BiSearchAlt onClick={props.onSearch} className='icon' />
    </div>
  )
}

export default Search;

/*
  return (
    <div className='search'>
      <input type='text' id='search' value={props.search}
      style={{ width:'300px' }}
      onChange={(e) => props.handleChange(e)}
      placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
      <BiSearchAlt onClick={props.onSearch} />
    </div>
  )

  styling
  remove all borders
  set border to white
  */