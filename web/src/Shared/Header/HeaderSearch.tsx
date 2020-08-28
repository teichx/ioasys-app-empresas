import React, { useState, useRef } from 'react';
import { ReactComponent as Search } from 'src/Icons/Search.svg';
import InputProject, { InputFunctions } from 'src/Shared/Input/Input';
import {
  Menu, Logo, SearchBarr, LogoContainer,
} from './Styles';

export interface HeaderSerachProps{
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeaderSearch:React.FC<HeaderSerachProps> = (props:HeaderSerachProps) => {
  const { handleChange } = props;
  const inputRef = useRef<InputFunctions>(null);
  const [ShowSearch, setShowSearch] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ShowSearch) {
      setShowSearch(true);
      setTimeout(() => inputRef.current?.setFocused(), 125);
    }
  };

  const handleBlur = () => {
    if (inputRef.current && inputRef.current.getValue() === '') { setShowSearch(false); }
  };

  return (
    <Menu className={ShowSearch ? 'show-search' : ''}>

      <LogoContainer>
        <Logo src="/logo-nav.png" />
      </LogoContainer>

      <SearchBarr>
        <InputProject
          placeholder="Pesquisar"
          type="search"
          name="search-empresas"
          required={false}
          Icon={Search}
          onClickInputStyle={handleClick}
          ref={inputRef}
          onChange={handleChange}
          onBlur={handleBlur}
        />

      </SearchBarr>

    </Menu>
  );
};

export default HeaderSearch;
