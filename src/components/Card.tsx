/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Card.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Image } from '../react-app-env';

export interface Props {
  pictures: Image[];
}

export const Card: React.FC<Props> = ({ pictures }) => {
  const sorted = pictures.sort((a, b) => b.rating - a.rating);
  const sortedLast = pictures.sort((a, b) => a.age - b.age);

  return (
    <>
      <h2 className="title">FEATURED IMAGES</h2>
      {sorted.slice(0, 5).map((picture, i) => (
        <div
          className={`card card--${i}`}
          key={picture.id}
        >
          <div className="containerstar">
            <label
              htmlFor={`${picture.id}`}
              className="containerstar__label"
            >
              <input
                id={`${picture.id}`}
                type="checkbox"
                className="containerstar__checkbox"
              />
              <div className="containerstar__divcheck"></div>
            </label>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}${picture.image}`}
            className="card-img"
            alt={picture.title}
          />

          <div className="card-product">
            <p className="card-product__name">
              {picture.title}
            </p>
            <p className="card-product__code">
              {picture.tags.map(item => `#${item} `)}
            </p>
          </div>
        </div>
      ))}

      <h2 className="title">LAST IMAGES</h2>
      {sortedLast.slice(0, 2).map((picture, i) => (
        <div
          className="card-last"
          key={picture.id}
        >

          <div className="containerstar">
            <label
              htmlFor={`${i}`}
              className="containerstar__label"
            >
              <input
                id={`${i}`}
                type="checkbox"
                className="containerstar__checkbox"
              />
              <div className="containerstar__divcheck"></div>
            </label>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}${picture.image}`}
            className="card-img"
            alt={picture.title}
          />

          <div className="card-last-product">
            <p className="card-last-product__namelast">
              {picture.title}
            </p>
            <p className="card-last-product__codelast">
              {picture.tags.map(item => `#${item} `)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
