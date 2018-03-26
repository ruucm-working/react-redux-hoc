import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/counter'
import { compose } from 'redux'
import { lifecycle } from 'recompose'
import { log } from 'ruucm-util'

export const TestInput = ({ counter, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>TestInput: {counter}</h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
)
TestInput.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

// export default TestInput
const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

// Component enhancer
const enhance = compose(
  lifecycle({
    componentDidMount() {
      log('hey');
    },
  }),
)
export default enhance(TestInput)
