import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ProtectedRoute from './util'

import './App.scss'

const Home = lazy(() => import('./pages/dashboard/Home'))
const Practice = lazy(() => import('./pages/dashboard/Practice'))
const Connect = lazy(() => import('./pages/dashboard/Connect'))
const Jobs = lazy(() => import('./pages/dashboard/Jobs'))
const Landing = lazy(() => import('./pages/Landing'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))


function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/dashboard" component={Home} />
          <ProtectedRoute exact path="/dashboard/practice" component={Practice} />
          <ProtectedRoute exact path="/dashboard/connect" component={Connect} />
          <ProtectedRoute exact path="/dashboard/jobs" component={Jobs} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
