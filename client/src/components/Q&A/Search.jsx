import React from 'react';

const Search = (props) => {
  return (
    <form>
      <input type='text' id='search' value={props.search}
      onChange={(e) => props.handleChange(e)}
      placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
    </form>
  )
}

export default Search;