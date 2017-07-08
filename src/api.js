// @flow

const baseUrl = 'https://yard.moscow/api/v1';

export default function get(resource: string) {
  return fetch(encodeURI(`${baseUrl}${resource}`)).then(response => response.json());
}
