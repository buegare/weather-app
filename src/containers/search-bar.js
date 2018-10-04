import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = event => {
      this.setState({ term: event.target.value })
    }

    this.onFormSubmit = event => {
      event.preventDefault()

      this.props.fetchWeather(this.state.term)
      this.setState({ term: '' })
    }
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite US cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

SearchBar.propTypes = {
  fetchWeather: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
