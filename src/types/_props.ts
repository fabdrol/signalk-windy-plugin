import * as moment from 'moment'
import * as api from './_api'

/*
 * Component PropType definitions
 */

export interface IRouterProps {
  history?:any,
  location?:any,
  match?:any,
  readAccess?:string[],
  writeAccess?:string[],
  user?: api.IAPIUser
}

export interface IOrderDetailsPropTypes extends IRouterProps {
  order: api.IAPIOrder|undefined,
  id: string,
  user: api.IAPIUser,
  fetching: boolean,
  fetched: boolean,
  fetch: (id:string) => void
}

export interface IReservationsPropTypes extends IRouterProps {
  fetched:boolean,
  fetching:boolean,
  reservations:any[],
  skip?:number,
  limit?:number,
  filter?:any,
  total?:number,
  sort?:string[],
  query?:string,
  partial?:boolean,
  user?:api.IAPIUser,
  project?:api.IAPIProject,
  fetch:() => void,
  setSkip:(payload:number) => void,
  setLimit:(payload:number) => void,
  setFilter:(payload:any) => void,
  setSort:(payload:string[]) => void,
  setQuery:(payload:string) => void
}

export interface IOrdersPropTypes extends IRouterProps {
  fetched:boolean,
  fetching:boolean,
  orders:api.IAPIOrder[],
  skip?:number,
  limit?:number,
  filter?:any,
  total?:number,
  sort?:string[],
  query?:string,
  partial?:boolean,
  user?:api.IAPIUser,
  project?:api.IAPIProject,
  fetch:() => void,
  setSkip:(payload:number) => void,
  setLimit:(payload:number) => void,
  setFilter:(payload:any) => void,
  setSort:(payload:string[]) => void,
  setQuery:(payload:string) => void,
}

export interface ICreateUserPropTypes extends IRouterProps {
  data?: boolean|api.IAPIUser,
  user: api.IAPIUser,
  createUser: (user:api.IAPIUser) => void,
}

export interface IEditUserPropTypes extends IRouterProps {
  id: string,
  data: api.IAPIUser,
  user: api.IAPIUser,
  mode: string,
  updateUser: (id:string, user:api.IAPIUser) => void,
  updateProfile: (id:string, user:api.IAPIProfile) => void,
  createUser: (user:api.IAPIUser) => void,
  close: () => void
}

export interface IUserDetailsPropTypes extends IRouterProps {
  id: string,
  users: api.IAPIUser[],
  user: api.IAPIUser,
  fetched: boolean,
  fetching: boolean,
  ordersFetched: boolean,
  ordersFetching: boolean,
  orders: any[],
  reservationsFetched: boolean,
  reservationsFetching: boolean,
  reservations: any[],
  fetchingCredits: boolean,
  fetchedCredits: boolean,
  balance: number,
  transactions: any[],
  fetchCredits: (id:string) => void,
  fetch: () => void,
  update: (id:string, update:api.IAPIUser) => void,
  destroy: (id:string) => void,
  fetchOrdersForUser: (id:string) => void,
  fetchReservationsForUser: (id:string) => void,
  loginAs: (id:string) => any
}

export interface ICreateSupplierPropTypes extends IRouterProps {
  close: () => void,
  createSupplier: (supplier:api.IAPISupplier) => void,
  updateSupplier: (id:string, supplier:api.IAPISupplier) => void,
  data?: boolean|api.IAPISupplier
}

export interface ICategoriesPropTypes extends IRouterProps {
  fetched: boolean,
  fetching: boolean,
  categories: any[],
  fetch: () => void,
  update: (id:string, update:api.IAPICategory) => void,
  create: (category:api.IAPICategory) => void,
  destroy: (id:string) => void
}

export interface IAppPropTypes extends IRouterProps {
  loggingIn: boolean,
  loggedIn: boolean,
  expiresAt: string,
  user: api.IAPIUser,
  projectId: string,
  error: any,
  logout: any,
  fetched: boolean,
  fetching: boolean,
  activeProject: string,
  projects: any[], // @TODO
  notification: any,
  loading: boolean,
  readAccess: string[],
  writeAccess: string[],
  attemptAutoLogin: () => Promise<api.IAPIUser>,
  fetchProjects: () => Promise<any[]>,
  switchProject: (id:string, swap:boolean) => void
}

export interface ISuppliersListPropTypes extends IRouterProps {
  fetched: boolean,
  fetching: boolean,
  suppliers: any[], // @TODO
  error: any,
  fetch: () => any,
  createSupplier: (supplier:api.IAPISupplier) => void,
  updateSupplier: (id:string, supplier:api.IAPISupplier) => void
}

export interface IUsersListPropTypes extends IRouterProps {
  fetched: boolean,
  fetching: boolean,
  users: api.IAPIUser[], // @TODO
  error: any,
  user: api.IAPIUser,
  skip: number,
  limit: number,
  total: number,
  fetch: () => any,
  createUser: (user:api.IAPIUser) => void,
  updateUser: (id:string, user:api.IAPIUser) => void,
  destroyUser: (id:string) => void,
  setLimit: (limit:number) => void,
  setSkip: (skip:number) => void,
  setFilter: (filter:any) => void,
  setSort: (sort:string[]) => void,
  setQuery: (query:string) => void
}

export interface ISuppliersOrdersPropTypes extends IRouterProps {
  fetched: boolean,
  fetching: boolean,
  fetch?: () => Promise<any>,
  orders: any[]
}

export interface ISuppliersProductsPropTypes extends IRouterProps {
  catalog: string,
  fetched: boolean,
  fetching: boolean,
  error: any,
  suppliers: api.IAPISupplier[],
  articles: api.IAPICatalogArticle[],
  available: api.IAPICatalogArticle[],
  selected: api.IAPICatalogArticle[],
  projects: api.IAPIProject[],
  activeProject:string,
  userProjectId: string,
  fetchArticles: () => void,
  fetchSuppliers: () => void,
  destroy: (article:api.IAPICatalogArticle) => void,
  publish: (article:api.IAPICatalogArticle) => void,
  unpublish: (article:api.IAPICatalogArticle) => void,
  setCatalog: (catalog:string) => void
}

export interface ICreateCatalogArticlePropTypes extends IRouterProps {
  fetched: boolean,
  fetching: boolean,
  error: any,
  fetch: () => void,
  create: (article:api.IAPICatalogArticle) => void,
  update: (id:string, article:api.IAPICatalogArticle) => void,
  close: () => void,
  suppliers: api.IAPISupplier[],
  data?:api.IAPICatalogArticle
}

export interface ISuppliersReservationsPropTypes extends IRouterProps {
  fetched: boolean,
  fetching: boolean,
  fetch?: () => Promise<any>,
  reservations: any[]
}

export interface IImportsPropTypes extends IRouterProps {
  fetched: boolean,
  fetching: boolean,
  fetch: () => Promise<any>,
  jobs: api.IAPIJob[]
}

export interface IDashboardPropTypes extends IRouterProps {
  fetched: boolean,
  fetching: boolean,
  period: string,
  startTime: moment.Moment,
  endTime: moment.Moment,
  filters: any[],
  uniqueVisitors: number,
  uniqueCustomers: number,
  orders: number,
  revenue: number,
  meanProductsPerOrder: number,
  meanRevenuePerOrder: number,
  top10Products: any[],
  top10Users: any[],
  graphVisitorsCustomers: any[],
  graphVisitorsOrders: any[],
  graphVisitorsRevenue: any[],

  fetch: () => void,
  setFilter: (filter:any[]) => void,
  setPeriod: (period:string) => void,
  setStartTime: (startTime:moment.Moment) => void,
  setEndTime: (endTime:moment.Moment) => void,
  setStartEndTime: (startTime:moment.Moment, endTime:moment.Moment) => void
}

export interface ICreateImportPropTypes extends IRouterProps {
  accessToken: string,
  expiresAt: string,
  user: api.IAPIUser,
  createJob: (job:any) => Promise<any>,
  setActiveTab: (tab:string) => void
}

export interface ICreateExportPropTypes extends IRouterProps {
  accessToken: string,
  expiresAt: string,
  user: api.IAPIUser,
  createJob: (job:any) => Promise<any>,
  setActiveTab: (tab:string) => void
}

export interface ILoginPropTypes extends IRouterProps {
  loggingIn: boolean,
  loggedIn: boolean,
  user: api.IAPIUser,
  projectId: string,
  error: any,
  login: any
}

export interface IUploaderPropTypes extends IRouterProps {
  id: string,
  stream: string
}