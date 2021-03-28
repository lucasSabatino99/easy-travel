import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: auto;
  width: auto;
  padding: 24px 24px 24px 32px;
  background-color: var(--white-ligth);
  color: var(--black);
  border-radius: 25px;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 16px;
  }
`;
