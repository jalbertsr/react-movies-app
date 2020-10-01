import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Movie from '../Movie/Movie'
import Showfilms from '../Showfilms/Showfilms'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/popular' render={
      props => (<Showfilms currentPage='Popular' category='popular'{...props} />
    )} />
    <Route path='/upcoming' render={
      props => (<Showfilms currentPage='Up Coming' category='upcoming' {...props} />
    )} />
    <Route path='/nowplaying' render={
      props => (<Showfilms currentPage='Now Playing' category='now_playing' {...props} />
    )} />
    <Route path='/toprated' render={
      props => (<Showfilms currentPage='Top Rated' category='top_rated' {...props} />
    )} />
    <Route path='/search/:query' render={
      props => (<Showfilms currentPage='Search Results' {...props} />
    )} />
    <Route path='/movie/:id' component={Movie} />
  </Switch>
)

export default Routes
