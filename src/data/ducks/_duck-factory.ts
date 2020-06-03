import { put, call } from 'redux-saga/effects'
import { Reducer } from 'redux'
import { ICRUDDuckState, IDuckFactoryResult, IAction } from '../../types'

export default function CRUDDuckFactory(namespace: string): IDuckFactoryResult<any> {
  const initialState = {
    fetched: false,
    fetching: false,
    list: [],
  }

  const actionTypes = {
    FETCH: `@@${namespace}/FETCH`,
    CREATE: `@@${namespace}/CREATE`,
    UPDATE: `@@${namespace}/UPDATE`,
    DESTROY: `@@${namespace}/DESTROY`,
    SET_FETCHED: `@@${namespace}/SET_FETCHED`,
    RESET: `@@app/RESET`,
    LOCAL_RESET: `@@${namespace}/LOCAL_RESET`,
  }

  const reducer: Reducer<ICRUDDuckState<any>> = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
      case actionTypes.FETCH:
        return {
          ...state,
          fetched: false,
          fetching: true,
        }

      case actionTypes.SET_FETCHED:
        return {
          ...state,
          fetched: true,
          fetching: false,
          list: payload,
        }

      case actionTypes.RESET:
      case actionTypes.LOCAL_RESET:
        return {
          ...state,
        }

      default:
        return {
          ...state,
        }
    }
  }

  const actionCreators = {
    fetch: () => ({
      type: actionTypes.FETCH,
      payload: undefined,
    }),

    create: (payload: any) => ({
      type: actionTypes.CREATE,
      payload,
    }),

    update: (id: string, params: any) => ({
      type: actionTypes.UPDATE,
      payload: {
        id,
        params,
      },
    }),

    destroy: (payload: string) => ({
      type: actionTypes.DESTROY,
      payload,
    }),

    reset: () => ({
      type: actionTypes.LOCAL_RESET,
      payload: undefined,
    }),

    setFetched: (payload: any[]) => ({
      type: actionTypes.SET_FETCHED,
      payload,
    }),
  }

  const sagasFactory = (WS: any, API: any) => {
    const sagas = {
      fetch: function* fetchSaga() {
        try {
          const results = yield call(API[namespace].fetch, WS)
          yield put(actionCreators.setFetched(results))
        } catch (err) {
          console.error(`[sagas/${namespace}/fetch] error: ${err.message}`)
        }
      },

      create: function* createSaga(action: IAction) {
        try {
          const { payload } = action
          yield call(API[namespace].create, WS, payload)
          yield sagas.fetch()
        } catch (err) {
          console.error(`[sagas/${namespace}/create] error: ${err.message}`)
        }
      },

      update: function* updateSaga(action: IAction) {
        try {
          const { payload } = action
          const { id, params } = payload

          yield call(API[namespace].update, WS, id, params)
          yield sagas.fetch()
        } catch (err) {
          console.error(`[sagas/${namespace}/update] error: ${err.message}`)
        }
      },

      destroy: function* destroySaga(action: IAction) {
        try {
          const { payload } = action

          yield call(API[namespace].destroy, WS, payload)
          yield sagas.fetch()
        } catch (err) {
          console.error(`[sagas/${namespace}/destroy] error: ${err.message}`)
        }
      },
    }

    return sagas
  }

  const duck: IDuckFactoryResult<any> = {
    reducer,
    initialState,
    actionTypes,
    actionCreators,
    sagasFactory,
  }

  return duck
}
