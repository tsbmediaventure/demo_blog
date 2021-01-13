import React from 'react';
import { Routes } from './Routes';
import { Switch, Route } from 'react-router-dom';
import Blog from '../view/Demo_Blog/BlogMain';
import Article from '../view/Demo_Blog/Article';
export default function Main() {
  return (
    <>
      <Switch>
        <Route path={Routes.ARTICLE}>
          <Article />
        </Route>
        <Route path={Routes.BLOG}>
          <Blog />
        </Route>
      </Switch>
    </>
  );
}
