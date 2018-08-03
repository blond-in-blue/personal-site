import React, {Component} from 'react'

const favorites = [
  'Sherlock'
  , 'Game of Thrones'
  , 'Courage the Cowardly Dog'
  , 'Mad Men'
  , 'Winnie the Pooh'
  , 'Dirk Gently\'s Holistic Detective Agency'
  , 'Top Gear'
]

/**
 * Contains information about the company and website.
 *
 * @class About
 * @extends {Component}
 */
class About extends Component {
  render() {
    return (
      <div class='content'>
        <h1>about</h1>
        <p>Well, this is the about page. There's really not much to it, so here are my favorite TV shows...</p>
        <ol>
          {favorites.map(function(listValue){
            return <li>{listValue}</li>
          })}
        </ol>
      </div>
    )
  }
}

export default About
