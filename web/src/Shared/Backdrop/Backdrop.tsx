import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { BackdropStyle } from './Styles';
import Loader from './Loader';

export interface BackdropRefI{
  isVisibility: () => boolean;
  setVisibility: (visible:boolean) => void;
}

export interface BackdropRefObjectI{
  ref: BackdropRefI | null;
}

const Backdrop: React.RefForwardingComponent<BackdropRefI, BackdropRefObjectI> = (props, ref) => {
  const [Visivel, setVisivel] = useState(false);

  const isVisibility = () => Visivel;
  const setVisibility = (visible:boolean) => setVisivel(visible);

  useImperativeHandle(ref, () => ({
    setVisibility,
    isVisibility,
  }));

  return (
    <BackdropStyle className={Visivel ? '' : 'hidden'}>
      <Loader />
    </BackdropStyle>
  );
};

export default forwardRef(Backdrop);
