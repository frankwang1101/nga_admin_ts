import React from 'react';
import { Homepage, User, Post, Column } from './source';
import AuthorizeCopm from '../Components/AuthorizeComp';
import { Switch } from 'react-router-dom';

export const routes: any = () => (
  <Switch>
    <AuthorizeCopm path="/" exact={true} component={Homepage} key="/" />,
    <AuthorizeCopm path="/user" component={User} key="user" />,
    <AuthorizeCopm path="/post" component={Post} key="post" />,
    <AuthorizeCopm path="/column" component={Column} key="column" />
  </Switch>
);
