import React from 'react'
import Loadable from 'react-loadable'

const lazyLoad = (loader: any) =>
Loadable({
  loader,
  loading: () => <div>loading.</div>
})

export const Homepage = lazyLoad(() =>
import(/* webpackChunkName: "home" */ '../pages/Home/Home')
)
export const Login = lazyLoad(() =>
import(/* webpackChunkName: "login" */ '../pages/Home/Login')
)
export const User = lazyLoad(() =>
import(/* webpackChunkName: "user" */ '../pages/User/User')
)
export const Post = lazyLoad(() =>
import(/* webpackChunkName: "post" */ '../pages/Post/Post')
)
export const Column = lazyLoad(() =>
import(/* webpackChunkName: "column" */ '../pages/Column/Column')
)