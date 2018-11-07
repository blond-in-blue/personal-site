import React, {Component} from 'react'
import './styles/css/App.css'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Header from './Header'
import ScoreCounter from './score-counter'
import About from './About'

/**
 * Main app view. Displays header and dynamically renders app content using routing.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header/>
            <div class="content-wrapper">
              {/* default page is /score-counter */}
              <Redirect from="/" to="/github-io/score-counter" exact="true"/>
              <Route path="/github-io/score-counter" component={ScoreCounter}/>
              <Route path="/github-io/about" component={About}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
