import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines'

const average = data => {
  return _.round(_.sum(data) / data.length)
}

const Chart = props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  units: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Chart
