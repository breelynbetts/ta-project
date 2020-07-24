import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppBar from './components/Appbar'
import Restroom from './pages/Restroom'
import RestroomDetail from './pages/RestroomDetail'

export default function Routing() {
  return (
    <Router>
      <AppBar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/restrooms">
            <Restroom />
          </Route>
          <Route path="/restroom/:id" component={RestroomDetail} />
        </Switch>
      </div>
    </Router>
  )
}
