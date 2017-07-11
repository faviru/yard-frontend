// @flow

export type AdjacentTerritory = {
  isAccessOpen?: boolean,
  isAllowedCars?: boolean,
  isGreeneryPlanted?: boolean
}

export type Image = {
  height: number,
  isPublic?: boolean,
  id: string,
  width: number
}

export type LinkedContactId = {
  length?: number
}

export type Location = {
  latitude?: number,
  localityId?: number,
  subLocalityName?: string,
  subwayIds: Array<any>,
  countryName?: string,
  longitude?: number,
  postalCode?: number,
  countryId?: number,
  subLocalityName?: number,
  house?: string,
  localityName?: string,
  street?: string,
  regionId?: number,
  regionName?: string
}

export type PurchaseTimeConditions = {
  agreementPreparation?: number,
  oralReservation?: number
}

export type ResponsibleUser = {
  id?: number,
  departmentId?: number
}

export type PriceValues = {
  usd?: number,
  eur?: number,
  rub?: number
}

export type Price = {
  from: PriceValues,
  to: PriceValues
}
export type Area = {
  from?: number,
  to?: number
}

export type Statistics = {
  resalePropertiesCount?: number,
  price?: Price,
  totalResaleArea?: Area,
  resalePrice?: Price,
  propertiesCount?: number,
  totalPrimaryArea?: Area,
  primaryPrice?: Price,
  primaryPropertiesCount?: number,
  totalArea?: Area
}

export type SaleOffer = {
  isMortgage?: boolean,
  agentFee?: number,
  isBargain?: boolean,
  kind?: string,
  isInstallment?: boolean
}

export type Information = {
  renovate?: string,
  condition?: string,
  ventilation?: string,
  furniture?: string,
  conditioning?: string
}

export type PropertyDefaults = {
  saleOffer?: SaleOffer,
  information?: Information
}

export type CeilHeight = {
  from?: number,
  to?: number
}

export type Details = {
  commissioningYear?: number,
  security?: string,
  parkings?: number,
  contractType?: string,
  withWasteDisposalRoom?: boolean,
  commissioningQuarter?: string,
  constructionKind?: string,
  propertyKind?: string,
  withRubbishChute?: boolean,
  maintenanceCosts?: number,
  startQuarter?: string,
  startYear?: number,
  ceilHeight?: CeilHeight,
  undergroundGarages?: number,
  infrastructureUnits?: Array<any>,
  architect?: string,
  accreditors?: Array<any>
}

export type Complex = {
  adjacentTerritory?: AdjacentTerritory,
  name: string,
  updatedAt?: string,
  location: Location,
  state?: string,
  statistics?: Statistics,
  image?: Image,
  purchaseTimeConditions?: PurchaseTimeConditions,
  cianId?: number,
  linkedContactIds?: Array<LinkedContactId>,
  propertyDefaults?: PropertyDefaults,
  slug?: string,
  responsibleUser?: ResponsibleUser,
  createdByUserId?: number,
  id: number,
  amenities: Array<any>,
  updatedByUserId?: number,
  createdAt?: string,
  details?: Details,
  installment?: any,
  images: Array<Image>
}

export type Pagination = {
  total?: number,
  limit?: number,
  offset?: number
}

export type ComplexesResponse = {
  items?: Array<Complex>,
  pagination?: Pagination
}
