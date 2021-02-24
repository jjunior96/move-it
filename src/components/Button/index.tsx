import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isActive, ...rest }) => (
  <S.Container type="button" isActive={isActive} {...rest}>
    {children}
  </S.Container>
);

export default Button;
