// @flow

export type Accreditiors = {
  length?: number
}

export type AdjacentTerritory = {
  area?: number,
  isAccessOpen?: boolean,
  isAllowedCars?: boolean,
  isGreeneryPlanted?: boolean,
  playgrounds?: number
}

export type Image = {
  id?: string,
  isPublic?: boolean
}

export type LinkedContactId = {
  length?: number
}

export type Location = {
  countryId?: number,
  countryName?: string,
  house?: string,
  latitude?: string,
  localityId?: number,
  localityName?: string,
  longitude?: string,
  postalCode?: number,
  regionId?: number,
  regionName?: string,
  street?: string
}

export type PurchaseTimeConditions = {
  agreementPreparation?: number,
  oralReservation?: number
}

export type ResponsibleUser = {
  departmentId?: number,
  id?: number
}

export type PriceValues = {
  eur?: number,
  rub?: number,
  usd?: number
}

export type Price = {
  from?: PriceValues,
  to?: PriceValues
}
export type Area = {
  from?: number,
  to?: number
}

export type Statistics = {
  price?: Price,
  primaryPrice?: Price,
  primaryPropertiesCount?: number,
  propertiesCount?: number,
  resalePrice?: Price,
  resalePropertiesCount?: number,
  totalArea?: Area,
  totalPrimaryArea?: Area,
  totalResaleArea?: Area,
  updatedAt?: string,
  updatedByUserId?: number
}

export type Complex = {
  accreditors?: Array<Accreditiors>,
  adjacentTerritory?: AdjacentTerritory,
  commissioningQuarter?: number,
  commissioningYear?: number,
  createdAt?: string,
  createdByUserId?: number,
  id?: number,
  images?: Array<Image>,
  keysIssueDate?: string,
  linkedContactIds?: Array<LinkedContactId>,
  location?: Location,
  name?: string,
  purchaseTimeConditions?: PurchaseTimeConditions,
  responsibleUser?: ResponsibleUser,
  state?: string,
  statistics?: Statistics,
  updatedAt?: string,
  updatedByUserId?: number
}

export type Pagination = {
  limit?: number,
  offset?: number,
  total?: number
}

export type ComplexesResponse = {
  items?: Array<Complex>,
  pagination?: Pagination
}
