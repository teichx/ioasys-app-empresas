import styled from 'styled-components';
import { InputStyle } from '../Input/Styles';

export const Logo = styled.img`
  max-height: 70px;
  object-fit: contain;
  display: block;
  padding: 20px;
`;

export const SearchBarr = styled.div`
  width: 30%;
  max-width: 350px;
  ${InputStyle}{
    margin: 0;
    border-color: #fff;
    border-width: 0 0 1px 0;
    &::after{
      background-color: #fff;
    }
    svg{
      fill: #fff;
      width: 22px;
      height: 22px;
      top: 5px;
    }
    input{
      color: #fff;
    }
  }
`;

export const LogoContainer = styled.div`
  width: 70%;
  ${Logo}{
    transform: translateX(-50%);
    margin: 0 auto 0 70%;
  }
`;

export const ButtonBack = styled.div`
  border-radius: 50%;
  cursor: pointer;
  transition: background-color .25s;
  height: 50px;
  width: 50px;
  padding: 10px;
  margin: 10px 0;
  &:hover{
    background-color: rgba(255,255,255, .1)
  }
  svg{
    width: 100%;
    height: 100%;
    fill: #fff;
  }
`;

export const TitleMenuBack = styled.div`
  font-size: 18px;
  margin-left: 12px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
`;

export const Menu = styled.div`
  background-color: #ee4c77;
  background-image: linear-gradient(173deg,#E34873 35%,#BA3B66 65%);
  overflow: hidden;
  height: 70px;
  padding: 0 5%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  &.header-back{
    justify-content: flex-start;
  }
  ${SearchBarr}{
    width: 30%;
  }
  @media(max-width: 992px){
    ${LogoContainer}{
      width: auto;
      ${Logo}{
        transform: translateX(0);
        margin-left: 0;
        margin-right: 0;
      }
    }
    ${SearchBarr}{
      width: 35%;
    }
  }
  @media(max-width: 768px){
    ${LogoContainer}{
      max-width: 100%;
      transform-origin: left;
      transition: transform .5s .25s, opacity .5s .25s, max-width .25s;
    }
    ${SearchBarr}{
      max-width: 100%;
      width: 32px;
      padding: 18px 0;
      ${InputStyle}{
        height: 32px;
        border-color: transparent;
        transition: border-color .0625s;
        input{
          display: none;
        }
      }
    }
    &.show-search{
      ${LogoContainer}{
        transition: transform .5s, opacity .5s, max-width .25s .25s;
        transform: translateX(-100%);
        max-width: 0;
        opacity: 0;
      }
      ${SearchBarr}{
        width: 100%;
        transition: all .5s .125s;
        ${InputStyle}{
          border-color: #fff;
          transition: border-color .25s .125s;
          input{
            display: block;
          }
        }
      }
    }
  }
`;

export const ContentWithoutLogo = styled.div`
  min-height: calc(100vh - 70px);
  background-color: #ebe9d7;
`;

export const Content = styled.div`
  width: 100%;
  padding: 5%;
  margin: auto;
  max-width: 1400px;
`;
