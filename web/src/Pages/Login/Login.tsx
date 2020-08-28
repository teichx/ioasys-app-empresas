import React, { useRef, useState } from 'react';
import { ReactComponent as EmailIcon } from 'src/Icons/Email.svg';
import { ReactComponent as CadeadoIcon } from 'src/Icons/Cadeado.svg';
import InputProject, { InputFunctions } from 'src/Shared/Input/Input';
import Backdrop, { BackdropRefI } from 'src/Shared/Backdrop/Backdrop';
import Axios, { AxiosRequestConfig } from 'axios';
import { useUsuarioLogado } from 'src/Context/useUsuarioLogado/useUsuarioLogado';
import { useHistory } from 'react-router-dom';
import { LoginCallback, acessData } from 'src/Context/useUsuarioLogado/UsuarioLogadoI';
import {
  TitleLogin, Formulario, DescriptionLogin, ButtonEntrar, ImagemLogo, DescricaoErro, Background,
} from './Styles';

const Login: React.FC = () => {
  const history = useHistory();
  const { setUsuario } = useUsuarioLogado();
  const [ErrorLogin, setErrorLogin] = useState(false);
  const refBackdrop = useRef<BackdropRefI>(null);
  const refUser = useRef<InputFunctions>(null);
  const refPassword = useRef<InputFunctions>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (ErrorLogin) setErrorLogin(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (refUser.current && refPassword.current && refBackdrop.current) {
      refBackdrop.current.setVisibility(true);
      const configuration:AxiosRequestConfig = {
        url: 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in',
        method: 'post',
        data: {
          email: refUser.current.getValue(),
          password: refPassword.current.getValue(),
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };
      Axios.request(configuration)
        .then((response) => {
          if (response.status === 200) {
            const login = response.data as LoginCallback;
            login.accessData = response.headers as acessData;
            setUsuario(login);
            history.push('/Empresas/');
          } else {
            setErrorLogin(true);
          }
        })
        .catch(() => {
          setErrorLogin(true);
        })
        .finally(() => refBackdrop.current?.setVisibility(false));
    }
  };

  return (
    <Background>
      <Backdrop ref={refBackdrop} />
      <Formulario onSubmit={handleSubmit}>
        <a href="https://ioasys.com.br/" target="_blank" rel="noopener noreferrer" title="Acessar site da ioasys">
          <ImagemLogo src="/logo-home.png" alt="Logo ioasys" />
        </a>

        <TitleLogin>BEM-VINDO AO EMPRESAS</TitleLogin>
        <DescriptionLogin>
          Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
        </DescriptionLogin>

        <InputProject
          placeholder="E-mail"
          name="email"
          type="email"
          required
          Icon={EmailIcon}
          ref={refUser}
          error={ErrorLogin}
          onChange={handleChange}
        />

        <InputProject
          placeholder="Senha"
          name="senha"
          type="password"
          required
          Icon={CadeadoIcon}
          ref={refPassword}
          error={ErrorLogin}
          onChange={handleChange}
        />
        {
          ErrorLogin
            ? <DescricaoErro>Credenciais informadas são inválidas, tente novamente.</DescricaoErro>
            : <></>
          }

        <ButtonEntrar type="submit">ENTRAR</ButtonEntrar>
      </Formulario>
    </Background>
  );
};

export default Login;
