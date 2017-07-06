// @flow
import type { Image, Location } from './Complexes/types';

export function formatLocation(location: Location): string {
  return [location.subLocalityName, location.street, location.house, location.postalCode]
  .filter(part => part !== undefined)
  .join(', ');
}

export function getLocalImageUrl(relativeUrl: string): string {
  return `${process.env.PUBLIC_URL || ''}${relativeUrl}`;
}

export function getExternalImageUrl(image?: Image, height: number = 512): string {
  return image ?
  `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}-${height}` :
  `http://via.placeholder.com/${height}`;
}

export function formatPrice(price: number): number {
  return Math.round((price / 1000000) * 10) / 10;
}
