import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '../view/Demo_Blog/BlogMain';
import Article from '../view/Demo_Blog/Article';
export default function Main() {
  return (
    <>
      <Switch>
        <Route path="/:articleId">
          <Article />
        </Route>
        <Route path="/">
          <Blog />
        </Route>
      </Switch>
    </>
  );
}
