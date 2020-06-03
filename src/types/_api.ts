import { GenericObject } from '.'

/*
 * API type definitions
 */
export interface IAPI {
  id?: string
  createdAt?: string
  updatedAt?: string
  project?: string | IAPIProject
}

export enum EAutomationRepeats {
  EVERY_DAY = 'EVERY_DAY',
  EVERY_WEEK = 'EVERY_WEEK',
  EVERY_TWO_WEEKS = 'EVERY_TWO_WEEKS',
  EVERY_MONTH = 'EVERY_MONTH',
  EVERY_QUARTER = 'EVERY_QUARTER',
  EVERY_SIX_MONTHS = 'EVERY_SIX_MONTHS',
  EVERY_YEAR = 'EVERY_YEAR',
  ONE_TIME = 'ONE_TIME',
}

export enum EAutomationActions {
  SEND_INVOICE = 'SEND_INVOICE',
  INVOICE_REMINDER = 'INVOICE_REMINDER',
  SEND_EMAIL = 'SEND_EMAIL',
  ACTIVATION_REMINDER = 'ACTIVATION_REMINDER',
}

export enum IAPIBudgetAssignmentType {
  CONTROLLER = 'controller',
  USER = 'user',
}

export enum IAPIInvoiceStatus {
  OPEN = 'open',
  PARTIAL = 'partial',
  PAID = 'paid',
  CREDITED = 'credited',
}

export interface IAPIActivity extends IAPI {
  attachments: string[]
  active: boolean
  open: boolean
  name: string
  title: string
  shortDescription: string
  longDescription: string
  startDate: string
  endDate: string
  openTo: string[]
  pricing: GenericObject<number>
  external: boolean
  externalHref: string
}

export interface IAPIInvoice extends IAPI {
  invoiceNumber?: string
  invoiceDate?: string
  description: string
  status: IAPIInvoiceStatus
  lines: any[]
  subtotal: number
  vatPercentage: number
  vat: number
  total: number
  name: string
  organisation?: string
  address1: string
  address2?: string
  postcode: string
  city: string
  country: string
  kvkNumber?: string
  vatNumber?: string
  email: string
  paymentLink?: string
  paymentLinkGenerated?: boolean
  userId?: string
}

export interface IAPIAutomation extends IAPI {
  name: string
  action: EAutomationActions
  startAt: string
  endAt: string
  repeat: EAutomationRepeats
  segment: string
  filter: any
  parameters: any
  results?: any[]
  active: boolean
}

export enum IAPIBudgetTransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

export interface IAPIBudgetAssignment extends IAPI {
  user: string
  budget: string
  type: IAPIBudgetAssignmentType
  project: string
  createdBy: string
}

export interface IAPIBudgetTransaction extends IAPI {
  type: IAPIBudgetTransactionType
  amount: number
  origin?: string
  description?: string
  budget: string
  user: string
}

export interface IAPIBudget extends IAPI {
  name: string
  transactions?: IAPIBudgetTransaction[]
  assignments?: IAPIBudgetAssignment[]
  project?: string
  createdby?: string
  expiryDate?: any
  balance?: number
}

export interface IAPIRequest extends IAPI {
  requestNumber: string
  requestDate: string
  orderLines: any[]
  user: IAPIUser
  deliveryAddress: IAPIAddress
  invoiceAddress: IAPIAddress
  status: string
}

export interface IAPICategory extends IAPI {
  title: string
  description: string
  parent: any
}

export interface IAPIAddress {
  organisation?: string
  name?: string
  address1?: string
  address2?: string
  postcode?: string
  city?: string
  email?: string
  phone?: string
  country?: string
}

export interface IAPIOrder extends IAPI {
  orderNumber: string
  orderDate: string
  orderLines: any[]
  user: IAPIUser
  deliveryAddress: IAPIAddress
  invoiceAddress: IAPIAddress
  status: string
  totals: any
  deliveries: any[]
  payments: any[]
}

export interface IAPIProject extends IAPI {
  active: boolean
  currencyCode: string
  currencySymbol: string
  customer: string
  emailSuffix: string
  name: string
  userCount: number
  orderLines: any[]
  settings: any
  branding: {
    [key: string]: any
  }
}

export interface IAPICountry {
  code: string
  name: string
}

export interface IAPIRights {
  [key: string]: boolean
}

export interface IAPIProfile extends IAPI {
  firstName?: string
  lastName?: string
  address1?: string
  address2?: string
  postcode?: string
  city?: string
  country?: string
  organisation?: string
  email?: string
  phone?: string
  customerUserId?: string
  importUUID?: string
  welcomeMessage?: boolean
  rights?: IAPIRights
  membership?: any
}

export interface IAPIUser extends IAPI {
  email?: string
  role?: string
  active?: boolean
  accessLevel?: number
  activatedAt?: string
  profile?: IAPIProfile
  firstLogin?: boolean
  inviteUsed?: boolean
  sendInviteEmail?: boolean
  invitationSent?: boolean
  inviteCode?: string
  customerUserId?: string
  vcwInviteSentV2?: boolean
}

export interface IAPIMediaResult {
  'Content-Type': string
  createdAt: string
  updatedAt: string
  id: string
  owner: string
  project: string
  url: string
  version: any[]
}

export interface IAPIJob {
  id?: string
  createdAt?: number
  updatedAt?: number
  finishedAt?: number
  startedAt?: number
  progress?: number
  type: string
  kind: string
  lines: any[]
  rows?: number
  status?: string
  headers: string[]
  mapping: any
  config: any
  project?: string
  credentials?: any
  reason?: string
  error?: string
  url?: string
}

export interface IAPISupplierAction {
  type: string
  name: string
  payload?: any
}

export interface IAPICatalog {
  id?: string
  createdAt?: number
  updatedAt?: number
  name: string
}

export interface IAPISupplier {
  id?: string
  createdAt?: number
  updatedAt?: number
  name: string
  actions?: IAPISupplierAction[]
  catalogs?: IAPICatalog[]
  outOfStockDefaultMessage?: string
  outOfStockLocalised?: string
}

export interface IAPICatalogArticle {
  id?: string
  createdAt?: string
  updatedAt?: string
  supplier: IAPISupplier | string
  catalog: IAPICatalog | string
  title: string
  status: string
  subtitle?: string
  brand?: string
  images?: string[]
  attachments?: string[]
  cover_image?: string
  description?: string
  price?: any
  cost?: any
  weight?: number
  volume?: number
  low?: number
  middle?: number
  high?: number
  eol?: boolean
  stock_date?: string
  sku: string
  minimum_quantity?: number
  maximum_quantity?: number
  minimum_user_level?: number
  is_jit_product?: boolean
  jit_product_lead_time?: number
  moq_artikel_minimum?: number
  moq_artikel_enddate?: string
  moq_artikel_staffel?: any[]
  price_staffel?: any[]

  stock?: number
  vat_percentage?: number
  vat?: number
  cost_vat_percentage?: number
  cost_vat?: number
}
