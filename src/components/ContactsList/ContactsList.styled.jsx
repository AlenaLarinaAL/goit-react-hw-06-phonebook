import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const List = styled.ul``;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Span = styled.span``;
export const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  background-color: rgba(242, 163, 65, 0.2);
  color: ${theme.colors.light};
  font-size: ${theme.fontSizes.small};
  transition: ${theme.animation.duration}, ${theme.animation.cubicBezier};

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
