import React from 'react' 

class GoogleMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = { zoom: 10 }
  }

  componentDidMount() {
    this.map = this.createMap()
    this.markers = this.createMarkers()
    google.maps.event.addListener(this.map, 'zoom_changed', () => this.handleZoomChange())
  }
  
  componentDidUnMount() {
    google.maps.event.clearListener(this.map, 'zoom_changed')
  }

  createMap() {
    let newYork = {
      lat: 40.7128,
      lng: -74.0059
    }

    let mapOptions = {
      zoom: this.state.zoom,
      center: newYork 
    }
    
    return new google.maps.Map(document.getElementById('js--google-map'), mapOptions)
  }

  createMarkers() {
    let markers = this.props.parlors.map((p) => {
      return new google.maps.Marker({
        position: {lat: p.latitude, lng: p.longitude},
        map: this.map
        })
    })
  }

  handleZoomChange() {
    this.setState({zoom: this.map.getZoom()})
  }

  render() {
    return (
      <div className='module'>
        <div id='js--google-map' className='map-container'>
        </div>
      </div>
    )
  }

}

export default GoogleMap
