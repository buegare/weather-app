import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GoogleMap extends Component {
  componentDidMount () {
    const map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })

    return map
  }

  render () {
    return <div ref="map" />
  }
}

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired
}

export default GoogleMap
