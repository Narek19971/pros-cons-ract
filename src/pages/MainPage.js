import React from 'react';
import ListContainer from '../containers/ListContainer';

const MainPage = () => (
  <div className="app">
    <div className="content">
      <header>Shoud I eat at McDonalds ?</header>
      <main className="container">
        <ListContainer type="pros" />
        <span className="line"></span>
        <ListContainer type="cons" />
      </main>
    </div>
  </div>
);
export default MainPage;
