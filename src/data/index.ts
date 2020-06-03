import { Store, createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import sagaFactory from './sagas'
import { IApplicationState } from '../types'
import API from '../api'
import rootReducer, { initialState } from './ducks'

export default function configureStore(): Store<IApplicationState> {
  const composeEnhancers = composeWithDevTools({})
  const sagas = sagaFactory(API)
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(sagas)
  return store
}
