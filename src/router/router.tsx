import React from 'react'
import { Homepage, User, Post, Column } from './source';

import { Route } from 'react-router-dom'

export const routes = [
  <Route path="/" exact={true} component={Homepage} key="/" />,
  <Route path="/user" component={User} key="user" />,
  <Route path="/post" component={Post} key="post" />,
  <Route path="/column" component={Column} key="column" />
]
