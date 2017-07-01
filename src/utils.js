// @flow

import type { Location } from './Complexes/types';

export function formatLocation(location: Location): string {
  return [location.subLocalityName, location.street, location.house]
  .filter(part => part !== undefined)
  .join(', ');
}

export function getLocalImageUrl(relativeUrl: string): string {
  return `${process.env.PUBLIC_URL || ''}${relativeUrl}`;
}
