import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from 'src/Pages/Login/Login';
import ListaEmpresas from 'src/Pages/Empresas/ListaEmpresas';
import DetalhesEmpresas from 'src/Pages/Empresas/DetalhesEmpresa';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/Empresas/" component={ListaEmpresas} />
      <PrivateRoute exact path="/Empresas/:id" component={DetalhesEmpresas} />

      <Route>
        <div>
          Error 404
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
