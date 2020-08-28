import React, {
  useState, useImperativeHandle, forwardRef, useRef,
} from 'react';
import { ReactComponent as Eye } from 'src/Icons/Eye.svg';
import { ReactComponent as Error } from 'src/Icons/Error.svg';
import { InputStyle } from './Styles';

interface InputProps{
  placeholder: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'search';
  required?: boolean;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  error?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickInputStyle?:(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface InputFunctions{
  getValue: () => string;
  setFocused: () => void;
}

const InputProject: React.RefForwardingComponent<InputFunctions, InputProps> = (props, ref) => {
  const propsTemp: InputProps = props;
  const {
    name, type, required, placeholder, Icon, error, onChange, onClickInputStyle, onFocus, onBlur,
  } = propsTemp;

  const refInput = useRef<HTMLInputElement | null>(null);
  const [isFocus, setisFocus] = useState(false);
  const [viewPassword, setviewPassword] = useState(false);

  const toggleVisibility = () => setviewPassword(!viewPassword);
  const typeForPassword = viewPassword ? 'text' : 'password';

  const getValue = () => (refInput.current ? refInput.current.value : '');
  const setFocused = () => (refInput.current?.focus());

  useImperativeHandle(ref, () => ({
    getValue,
    setFocused,
  }));

  const ButtonEye = () => (
    <button type="button" onMouseDown={toggleVisibility}>
      <Eye />
    </button>
  );

  const ButtonError = () => (
    <button type="button" disabled>
      <Error />
    </button>
  );

  const showEyeForPassword = type === 'password' ? ButtonEye() : <></>;

  return (
    <InputStyle
      className={isFocus ? 'focused' : ''}
      onClick={onClickInputStyle}
    >
      <Icon />
      <input
        onFocus={(ev) => {
          setisFocus(true);
          if (onFocus) onFocus(ev);
        }}
        onBlur={(ev) => {
          setisFocus(false);
          if (onBlur) onBlur(ev);
        }}
        onChange={onChange}
        name={name}
        type={type === 'password' ? typeForPassword : type}
        required={required}
        placeholder={placeholder}
        ref={refInput}
      />
      {error ? ButtonError() : showEyeForPassword}
    </InputStyle>
  );
};

export default forwardRef(InputProject);
