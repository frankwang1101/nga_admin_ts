import * as React from 'react'
import * as Loadable from 'react-loadable'

import { Route } from 'react-router-dom'

const lazyLoad = (loader: any) =>
  Loadable({
    loader,
    loading: () => <div>loading.</div>
  })

const Homepage = lazyLoad(() =>
  import(/* webpackChunkName: "home" */ '../pages/Home/Home')
)
const User = lazyLoad(() =>
  import(/* webpackChunkName: "user" */ '../pages/User/User')
)
const Post = lazyLoad(() =>
  import(/* webpackChunkName: "post" */ '../pages/Post/Post')
)
const Column = lazyLoad(() =>
  import(/* webpackChunkName: "column" */ '../pages/Column/Column')
)

export const routes = [
  <Route path="/" exact={true} component={Homepage} key="/" />,
  <Route path="/user" component={User} key="user" />,
  <Route path="/post" component={Post} key="post" />,
  <Route path="/column" component={Column} key="column" />
]
