import styled, { keyframes } from 'styled-components';

export const BackdropStyle = styled.div`
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255, .6);
  backdrop-filter: blur(5px);
  transition: opacity 1.5s, visibility 1.5s;
  &.hidden{
    opacity: 0;
    visibility: hidden;
  }
`;

export const animationLoader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderIntern = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #57bbbc;
  border-radius: 50%;
  animation: ${animationLoader} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #57bbbc transparent transparent transparent;
`;

export const LoaderStyle = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  ${LoaderIntern}{
    &:nth-child(1){
      animation-delay: -0.45s;
    }
    &:nth-child(2){
      animation-delay: -0.3s;
    }
    &:nth-child(3){
      animation-delay: -0.15s;
    }
  }
`;
