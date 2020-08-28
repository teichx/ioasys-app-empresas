import React, { useState } from 'react';
import { useUsuarioLogado } from 'src/Context/useUsuarioLogado/useUsuarioLogado';
import { ContentWithoutLogo, Content } from 'src/Shared/Header/Styles';
import HeaderSearch from 'src/Shared/Header/HeaderSearch';
import Axios from 'axios';
import { EnterpriseI } from 'src/Context/useUsuarioLogado/UsuarioLogadoI';
import EmpresaItemList from './EmpresaItemList';
import { NenhumResultado } from './Styles';

const ListaEmpresas: React.FC = () => {
  const { Usuario } = useUsuarioLogado();
  const [Empresas, setEmpresas] = useState<EnterpriseI[] | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (value !== '') {
      Axios.request({
        url: `https://empresas.ioasys.com.br/api/v1/enterprises?enterprise_types=1&name=${value}`,
        method: 'GET',
        headers: {
          client: Usuario?.accessData?.client,
          uid: Usuario?.accessData?.uid,
          'access-token': Usuario?.accessData?.['access-token'],
        },
      }).then((response) => {
        setEmpresas(response.data.enterprises);
      });
    }
  };

  return (
    <>
      <HeaderSearch handleChange={handleChange} />
      <ContentWithoutLogo>
        <Content>
          {Empresas
            ? Empresas.map((empresa) => (
              <EmpresaItemList
                imageUrl={empresa.photo}
                title={empresa.enterprise_name}
                type={empresa.enterprise_type.enterprise_type_name}
                country={empresa.country}
                id={empresa.id}
                key={`empresas-${empresa.id}`}
              />
            ))
            : (
              <NenhumResultado>
                Nenhuma empresa foi encontrada para a busca realizada.
              </NenhumResultado>
            )}
        </Content>
      </ContentWithoutLogo>
    </>
  );
};

export default ListaEmpresas;
