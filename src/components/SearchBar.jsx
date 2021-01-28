import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../actions/index';

function SearchBar() {
  const [state, setState] = useState({
    search: '',
    tag: false,
  });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = () => {};

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="search"
          name="search"
          value={state.search}
          onChange={handleChange}
        />
        <label htmlFor="tag">
          search in tags only
          <input
            type="checkbox"
            name="tag"
            value={state.tag}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleClick}>
          Add
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
