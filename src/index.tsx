import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from './data'

import App from './ui/app'

const store = configureStore()
const noop = () => null

const AppWithChildren = (props: any) => (
  <App {...props}>
    <Route exact={true} path="/" component={noop} />
  </App>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={AppWithChildren} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
