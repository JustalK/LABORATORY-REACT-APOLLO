import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Experiences from '@pages'

export default function App() {
  return (
    <Router>
      <div className="navigation">
        <nav>
          <ul>
            {Object.keys(Experiences).map((e, index) => (
              <li key={index}>
                <Link to={`/${index + 1}`}>{e}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="content">
        <Switch>
          {Object.keys(Experiences).map((e, index) => {
            const Type = Experiences[e]
            return (
              <Route key={index} path={`/${index + 1}`}>
                <Type />
              </Route>
            )
          })}
          <Route path="/">
            <span>Click on one of the experience on the left side</span>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
