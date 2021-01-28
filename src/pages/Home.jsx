import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ToolsList from '../components/ToolsList';
import * as Actions from '../actions/index';

function Home() {
  const dispatch = useDispatch();

  const fetchApi = () => {
    dispatch(Actions.fetchCurrenciesThunk());
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <div>
      <Header />
      <main>
        <SearchBar />
        <ToolsList />
      </main>
    </div>
  );
}

export default Home;
