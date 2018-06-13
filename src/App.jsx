import React, {Component} from 'react'
import './styles/css/App.css'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
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
            <div id="Content">
              {/* default page is /home */}
              <Redirect from="/" to="home"/>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
