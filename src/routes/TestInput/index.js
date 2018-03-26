import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'test-input',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const TestInput = require('./containers/TestInputContainer').default
      const reducer = require('./modules/counter').default
      const form_reducer = require('./modules/form').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })
      injectReducer(store, { key: 'selectedOption', reducer: form_reducer })

      /*  Return getComponent   */
      cb(null, TestInput)

    /* Webpack named bundle   */
    }, 'counter')
  }
})


