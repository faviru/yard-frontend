// @flow
import type { Image, Location } from './Complexes/types';

export function formatLocation(location: Location): string {
  return [location.subLocalityName, location.street, location.house]
  .filter(part => part !== undefined)
  .join(', ');
}

export function getLocalImageUrl(relativeUrl: string): string {
  return `${process.env.PUBLIC_URL || ''}${relativeUrl}`;
}

export function getExternalImageUrl(image?: Image, size: number = 512): string {
  return image ?
  `https://images.jqestate.ru/${image.id}-jqestate-${size}` :
  `http://via.placeholder.com/${size}`;
}

export function formatPrice(price: number): number {
  return Math.round((price / 1000000) * 10) / 10;
}
