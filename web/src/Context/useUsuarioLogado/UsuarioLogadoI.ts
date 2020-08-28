export type onlyHasChildren = {
  children?: React.ReactNode;
}

export interface UsuarioLogadoContextI {
  Usuario: LoginCallback | null;
  setUsuario(usuario: LoginCallback | null): void;
  LoginValido(): boolean;
}

export interface enterpriseTypeI{
  id: number;
  'enterprise_type_name': string;
}

export interface EnterpriseI{
  city: string;
  country: string;
  description: string;
  'email_enterprise': string;
  'enterprise_name': string;
  'enterprise_type': enterpriseTypeI
  facebook: string;
  id:number;
  linkedin: string;
  'own_enterprise': boolean;
  phone: string;
  photo: string;
  'share_price': number;
  twitter: string;
  value: number;
}

export interface portifolioI {
  'enterprises_number': number;
  enterprises: any
}

export interface investorI {
  id: number;
  'investor_name': string;
  email: string;
  city: string;
  country: string;
  balance: number;
  photo: string;
  portfolio: portifolioI;
  'portfolio_value': number;
  'first_access': boolean,
  'super_angel': boolean
}

export interface acessData {
  'access-token': string;
  'cache-control': string;
  client: string;
  'content-type': string;
  expiry: string;
  'token-type': string;
  uid: string;
}

export interface LoginCallback {
  investor: investorI;
  enterprise: any;
  success: boolean;
  accessData?: acessData;
}
