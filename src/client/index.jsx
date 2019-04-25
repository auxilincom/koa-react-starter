// @flow

import Root from 'root';

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.pcss';

const minLoadingTime: number = 1500;
const now: number = Date.now();

const renderApp = () => {
  const rootEl = document.getElementById('root');
  if (!(rootEl instanceof Element)) {
    throw new Error('invalid type');
  }

  ReactDOM.render(
    <Root />,
    rootEl,
  );
};

const hidePoster = () => {
  const poster = document.getElementById('poster');
  const html = document.documentElement;
  if (!(poster instanceof Element) || !(html instanceof Element)) {
    return;
  }
  poster.classList.add(styles.posterHidden);

  setTimeout(() => {
    poster.classList.add(styles.posterNone);
    html.classList.remove('show-poster');
  }, 600);
};

renderApp();

if (now - window.loadingTime > minLoadingTime) {
  hidePoster();
} else {
  setTimeout(hidePoster, minLoadingTime - (now - window.loadingTime));
}
