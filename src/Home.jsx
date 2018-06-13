import React, {Component} from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import Photos from './photos'
import Measure from 'react-measure'


/**
 * Score Counter app info.
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  constructor() {
    super()
    this.state = { 
      currentImage: 0, 
      dimensions: {
        width: -1,
        height: -1
      }  
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  render() {
    const width = this.state.dimensions.width
    return (
      <div>
        <h1>score counter</h1>
        <p>this is a very simple score counter, with only 3 functions:</p>
        <ul>
          <li>tap anywhere in the score area to increment the score by one</li>
          <li>tap the 'minus' button to decrement the score by one</li>
          <li>tap the 'reset' button to reset both scores to zero</li>
        </ul>

        <h3>screenshots</h3>
        <Measure bounds 
          onResize={
            (contentRect) => this.setState(
              { dimensions: { width: contentRect.bounds.width } }
            )
          }
        >
          {
            ({measureRef}) => {
              if (width < 1 ){
                return <div ref={measureRef}>Loading...</div>
              }
              let columns = 1
              if (width >= 480) {
                columns = 2
              }
              if (width >= 777) {
                columns = 3
              }
              return (
                <div ref={measureRef}>
                  <Gallery photos={Photos} columns={columns} onClick={this.openLightbox} />
                  <Lightbox images={Photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                  />
                </div>
              )
            }
          }
        </Measure>
      </div>
    )
  }
}

export default Home
