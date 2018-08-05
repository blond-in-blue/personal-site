import React, {Component} from 'react'
import { Document, Page } from 'react-pdf'
import resume from './assets/Hunter Holder\'s Résumé.pdf'

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
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <div class='content'>
        <h1>about me</h1>
        <p>Hello, my name is Hunter Holder.</p>
        <a href='https://www.icloud.com/pages/0TmKCoWlDS3EXiha2tBTkQtQw' target="_blank" rel="noopener noreferrer">Here's my résumé</a>
        <Document
        file={resume}
        onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p className='mt-5'>And here are my favorite TV shows:</p>
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
