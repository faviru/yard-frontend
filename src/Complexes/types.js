// @flow

export type Accreditiors = {
  length: number
}

export type Image = {
  id: string,
  isPublic: boolean
}

export type LinkedContactId = {
  length: number
}

export type Complex = {
  accreditors: Array<Accreditiors>,
  adjacentTerritory: any,
  commissioningQuarter: number,
  commissioningYear: number,
  createdAt: string,
  createdByUserId: number,
  id: number,
  images: Array<Image>,
  keysIssueDate: string,
  linkedContactIds: Array<LinkedContactId>,
  location: any,
  name: string,
  purchaseTimeConditions: any,
  responsibleUser: any,
  state: string,
  statistics: any,
  updatedAt: string,
  updatedByUserId: number
}

export type ComplexesResponse = {
  items: Array<Complex>,
  pagination: any
}
