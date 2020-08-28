import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Arrow } from 'src/Icons/Arrow.svg';
import { Menu, ButtonBack, TitleMenuBack } from './Styles';

export interface HeaderBackI{
  title?: string;
}

const HeaderBack: React.FC<HeaderBackI> = ({ title }:HeaderBackI) => {
  const history = useHistory();

  const handleClickBack = () => history.goBack();

  return (
    <Menu className="header-back">

      <ButtonBack onClick={handleClickBack}>
        <Arrow />
      </ButtonBack>

      <TitleMenuBack>{title || ''}</TitleMenuBack>

    </Menu>
  );
};

export default HeaderBack;
