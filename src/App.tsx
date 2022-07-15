import React from 'react';
import './App.scss';
import { Card } from './components';
import data from './api/data.json';
import next from './icons/next.svg';
import back from './icons/back.svg';

export const App: React.FC = () => {
  return (
    <div className="catalog">
      <div className="box-back">
        <img
          src={`${back}`}
          className="back"
          alt="back"
        />
      </div>
      <div className="box-next">
        <img
          src={`${next}`}
          className="next"
          alt="next"
        />
      </div>
      <Card pictures={data} />
      <img
        src="https://via.placeholder.com/540x900"
        className="banner"
        alt="banner"
      />
    </div>
  );
};
