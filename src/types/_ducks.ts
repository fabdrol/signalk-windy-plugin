import * as api from './_api'

/*
 * Main Application state definition
 */
export interface IApplicationState {
  ui: IUIDuckState
}

export interface ICRUDDuckState<T> {
  fetched: boolean
  fetching: boolean
  list: T[]
}

/*
 * Duck state definition
 */
export interface IUIDuckState {
  loading: boolean
  error: any
  notification: any
  countries: api.IAPICountry[]
}
