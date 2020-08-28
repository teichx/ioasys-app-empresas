import styled from 'styled-components';

export const Background = styled.div`
  background-color: #ebe9d7;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleLogin = styled.h1`
  margin: auto;
  color: #383743;
  font-size: 28px;
  max-width: 200px;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -.6px;
`;

export const DescriptionLogin = styled.p`
  color: #383743;
  margin: 16px auto;
  text-align: center;
`;

export const Formulario = styled.form`
  width: 90%;
  padding: 10% 0;
  margin: 0 5%;
  max-width: 300px;
`;

export const ButtonEntrar = styled.button`
  width: 100%;
  font-weight: 600;
  color: #fff;
  display: block;
  cursor: pointer;
  margin: 48px auto 48px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #57bbbc;
  border: 1px solid #57bbbc;
  position: relative;
  outline-color: #FFF;
  text-transform: uppercase;
  &::before{
    content: "";
    box-shadow: 0 10px 10px 0 rgba(0,0,0, .175);
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: opacity .5s;
    background-color: rgba(255,255,255, .1);
  }
  &:hover{
    &::before{
      opacity: 1;
    }
  }
`;

export const ImagemLogo = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto 48px;
  object-fit: contain;
`;

export const DescricaoErro = styled.p`
  margin-top: 12px;
  font-size: 11px;
  text-align: center;
  color: #ef5781;
`;
