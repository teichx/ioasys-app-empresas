import React, {
  createContext, useContext, useState,
} from 'react';
import { onlyHasChildren, LoginCallback, UsuarioLogadoContextI } from './UsuarioLogadoI';

const UsuarioLogadoContext = createContext<UsuarioLogadoContextI>({} as UsuarioLogadoContextI);

const UsuarioLogado: React.FC<onlyHasChildren> = ({ children }:onlyHasChildren) => {
  const [UsuarioState, setUsuarioState] = useState<LoginCallback | null>(null);

  const LoginValido = () => (
    UsuarioState && UsuarioState.accessData
      ? UsuarioState.accessData.uid !== ''
      : false
  );

  const setUsuario = (obj: React.SetStateAction<LoginCallback | null>) => {
    setUsuarioState(obj);
  };

  return (
    <UsuarioLogadoContext.Provider value={{
      Usuario: UsuarioState,
      setUsuario,
      LoginValido,
    }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};

export default UsuarioLogado;

export function useUsuarioLogado():UsuarioLogadoContextI {
  const context = useContext(UsuarioLogadoContext);
  if (!context) throw new Error('useUsuarioLogado não pode ser acessado deste contexto');
  const { Usuario, setUsuario, LoginValido } = context;
  return { Usuario, setUsuario, LoginValido };
}
