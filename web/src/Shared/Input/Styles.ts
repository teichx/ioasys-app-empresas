import styled from 'styled-components';

export const InputStyle = styled.div`
  width: 100%;
  margin: 36px 0 0;
  position: relative;
  border-style: solid;
  border-color: #757575;
  border-width: 0 0 2px 0;
  transition: border-color .25s;
  &:hover{
    border-color: #383743;
  }
  &::after{
    content: "";
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 2px;
    bottom: -2px;
    margin: auto;
    display: block;
    position: absolute;
    transform: scaleX(0);
    background-color: #EF5781;
    transition: transform .25s;
  }
  &.focused{
    &::after{
      transform: scaleX(1);
    }
  }
  input{
    &, &:-internal-autofill-selected{
      border: 0;
      outline: 0;
      width: 100%;
      padding: 8px 12px 8px 37px;
      font-size: 14px;
      background-color: transparent;
    }
  }
  button{
    display: block;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 32px;
    top: 0;
    svg{
      fill: #383743;
    }
    &:disabled{
      svg{
        width: 22px;
        height: 22px;
        top: 5px;
        fill: #ff0f44;
      }
    }
    &:focus{
      svg{
        fill: #EE4C77;
      }
    }
  }
  svg{
    fill: #EE4C77;
    left: 5px;
    top: 2.5px;
    width: 27px;
    height: 27px;
    position: absolute;
    transition: fill .25s;
  }
`;
