import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Form = styled.form`
  display: grid;
`;
export const Label = styled.label`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
`;
export const Input = styled.input`
  width: calc(100% - 20px);
  height: 30px;
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid rgba(242, 163, 65, 0.2);
  border-radius: 4px;
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: transparent;
  color: ${theme.colors.accent};
  border-radius: 4px;
  :hover,
  :focus {
    background-color: transparent;
    color: ${theme.colors.accent};
  }
`;
export const Button = styled.button`
  margin: 0 auto;
  width: 250px;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 5px;
  background-color: rgba(242, 163, 65, 0.2);
  color: ${theme.colors.light};
  transition: ${theme.animation.duration}, ${theme.animation.cubicBezier};

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
