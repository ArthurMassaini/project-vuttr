import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const { search, tag } = state;
    dispatch(Actions.setFilters(search, tag));
  }, [state, dispatch]);

  return (
    <section className="search-section">
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
        <button type="button">Add</button>
      </form>
    </section>
  );
}

export default SearchBar;
