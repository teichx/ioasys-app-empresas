import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/Routes';
import { StyleGlobal } from './Shared/Styles';
import UsuarioLogado from './Context/useUsuarioLogado/useUsuarioLogado';

ReactDOM.render(
  <UsuarioLogado>
    <StyleGlobal />
    <Routes />
  </UsuarioLogado>,
  document.getElementById('root'),
);
