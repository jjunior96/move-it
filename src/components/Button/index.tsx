import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isFailed?: boolean;
  isSucceeded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isActive = false,
  isFailed = false,
  isSucceeded = false,
  ...rest
}) => (
  <S.Container
    type="button"
    isActive={isActive}
    isFailed={isFailed}
    isSucceeded={isSucceeded}
    {...rest}
  >
    {children}
  </S.Container>
);

export default Button;
