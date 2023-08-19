import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Label = styled.label`
  margin: 0 auto;
  margin-bottom: 15px;
  width: 100%;
`;
export const Input = styled.input`
  width: calc(100% - 20px);
  margin-bottom: 15px;
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
