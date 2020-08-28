import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useUsuarioLogado } from 'src/Context/useUsuarioLogado/useUsuarioLogado';

const PrivateRoute: React.FC<RouteProps> = (rest:RouteProps) => {
  const { LoginValido } = useUsuarioLogado();

  return (
    LoginValido()
      ? (
        <Route
          location={rest.location}
          component={rest.component}
          path={rest.path}
          exact={rest.exact}
          sensitive={rest.sensitive}
          strict={rest.sensitive}
          render={rest.render}
        >
          {rest.children}
        </Route>
      )
      : <Redirect to="/" />
  );
};

export default PrivateRoute;
