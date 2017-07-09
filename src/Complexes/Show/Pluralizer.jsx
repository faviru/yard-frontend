// @flow

import React from 'react';
import pluralize from 'pluralize-ru';
import styled from 'styled-components';


const Pluralizer = styled.div`
  display: inline;
`;

type Props = {
  count: number,
  one: string,
  four: string,
  many: string
}

export default (props: Props) => (
  <Pluralizer>
    {pluralize(props.count, '', props.one, props.four, props.many)}
  </Pluralizer>
);
