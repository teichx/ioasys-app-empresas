import React from 'react';
import {
  EmpresaItemListStyle,
  EmpresaItemType,
  EmpresaItemCountry,
  EmpresaItemImage,
  EmpresaItemContent,
  EmpresaItemName,
  EmpresaItemStyleDefault,
} from './Styles';

export interface EmpresaItemI{
  imageUrl: string;
  title: string;
  type: string;
  country: string;
  id: number;
}

const EmpresaItemList: React.FC<EmpresaItemI> = (props:EmpresaItemI) => {
  const {
    imageUrl, title, type, country, id,
  } = props;
  return (
    <EmpresaItemListStyle to={`/Empresas/${id}`}>
      <EmpresaItemStyleDefault>

        <EmpresaItemImage style={{ backgroundImage: imageUrl }} />

        <EmpresaItemContent>
          <EmpresaItemName>{title}</EmpresaItemName>
          <EmpresaItemType>{type}</EmpresaItemType>
          <EmpresaItemCountry>{country}</EmpresaItemCountry>
        </EmpresaItemContent>

      </EmpresaItemStyleDefault>
    </EmpresaItemListStyle>
  );
};

export default EmpresaItemList;
