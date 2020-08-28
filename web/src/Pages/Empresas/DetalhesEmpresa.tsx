import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContentWithoutLogo, Content } from 'src/Shared/Header/Styles';
import HeaderBack from 'src/Shared/Header/HeaderBack';
import Axios from 'axios';
import { useUsuarioLogado } from 'src/Context/useUsuarioLogado/useUsuarioLogado';
import { EnterpriseI } from 'src/Context/useUsuarioLogado/UsuarioLogadoI';
import Backdrop, { BackdropRefI } from 'src/Shared/Backdrop/Backdrop';
import { DetalhesEmpresaStyle, EmpresaItemImage, DetalhesEmpresaDescription } from './Styles';

const DetalhesEmpresas: React.FC = () => {
  const [Empresa, setEmpresa] = useState<EnterpriseI | null>(null);
  const refBackdrop = useRef<BackdropRefI>(null);
  const { Usuario } = useUsuarioLogado();
  const { id } = useParams();

  useEffect(() => {
    if (!Empresa && refBackdrop.current) {
      refBackdrop.current.setVisibility(true);
    }
  }, [Empresa, refBackdrop]);

  (() => {
    if (!Empresa) {
      Axios.request({
        url: `https://empresas.ioasys.com.br/api/v1/enterprises/${id}`,
        method: 'GET',
        headers: {
          client: Usuario?.accessData?.client,
          uid: Usuario?.accessData?.uid,
          'access-token': Usuario?.accessData?.['access-token'],
        },
      }).then((response) => {
        setEmpresa(response.data.enterprise);
      });
    }
  })();

  return (
    Empresa
      ? (
        <>
          <HeaderBack title={Empresa.enterprise_name} />
          <ContentWithoutLogo>
            <Content>
              <DetalhesEmpresaStyle>
                <EmpresaItemImage />

                <DetalhesEmpresaDescription>{Empresa.description}</DetalhesEmpresaDescription>
              </DetalhesEmpresaStyle>
            </Content>
          </ContentWithoutLogo>
        </>
      )
      : (
        <>
          <HeaderBack />
          <ContentWithoutLogo />
          <Backdrop ref={refBackdrop} />
        </>
      ));
};

export default DetalhesEmpresas;
