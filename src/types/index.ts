import { Reducer, Action, ActionCreator } from 'redux'
import { ICRUDDuckState } from './_ducks'

/*
 * Pass-through type definitions
 */
export * from './_ducks'
export * from './_api'
export * from './_props'

export interface IAction {
  type: string
  payload: any
}

export interface GenericObject<T> {
  [key: string]: T
}

export interface IDuckFactoryResult<T> {
  initialState: ICRUDDuckState<T>
  actionTypes: GenericObject<string>
  reducer: Reducer<ICRUDDuckState<any>>
  actionCreators: GenericObject<ActionCreator<Action>>
  sagasFactory: (WS: any, API: any) => GenericObject<any>
}

export interface IFieldMappingDefinition {
  id: string
  name: string
  required: boolean
}

export interface IIOMessage {
  type: string
  payload: any
}

export interface ITableColumn {
  title: string
  dataIndex: string
  sortDirections?: any
  render?: any
  sorter?: any
  filters?: any[]
}

export interface IPagination {
  current: number
  total: number
  pageSize: number
  hideOnSinglePage: boolean
}
