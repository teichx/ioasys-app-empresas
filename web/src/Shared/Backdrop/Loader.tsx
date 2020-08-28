import React from 'react';
import { LoaderIntern, LoaderStyle } from './Styles';

const Loader: React.FC = () => (
  <LoaderStyle>
    <LoaderIntern />
    <LoaderIntern />
    <LoaderIntern />
    <LoaderIntern />
  </LoaderStyle>
);

export default Loader;
