import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EmpresaItemImage = styled.div`
  width: 35%;
  height: 0%;
  padding: 0 0 20% 0;
  background-color: green;
  object-fit: contain;
  display: block;
  border-radius: 4px;
`;

export const EmpresaItemContent = styled.div`
  width: 62.5%;
  margin-left: 2.5%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const EmpresaItemName = styled.p`
  color: #1a0e49;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
`;

export const EmpresaItemType = styled.p`
  color: #8d8c8c;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 400;
`;

export const EmpresaItemCountry = styled.p`
  color: #8d8c8c;
  font-size: 16px;
  font-weight: 400;
`;

export const EmpresaItemStyleDefault = styled.div`
  width: 100%;
  padding: 2.5%;
  margin-bottom: 5%;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px 10px rgba(0,0,0, .05);
`;

export const EmpresaItemListStyle = styled(Link)`
  text-decoration: none;
  display: block;
  &:hover{
    text-decoration: none;
  }
  ${EmpresaItemStyleDefault}{
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
  }
`;

export const DetalhesEmpresaDescription = styled.p`
  color: #000;
`;

export const DetalhesEmpresaStyle = styled(EmpresaItemStyleDefault)`
  ${EmpresaItemImage}{
    width: 100%;
    margin-bottom: 2.5%;
  }
`;

export const NenhumResultado = styled.p`
  text-align: center;
  margin-top: 30vh;
`;
