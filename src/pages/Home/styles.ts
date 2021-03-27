import styled from 'styled-components';
import Background from '../../assets/img/background-france.jpg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  background: url(${Background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .content {
    height: 100vh;
    max-width: 1216px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 280px 1fr;
  }

  .wrapper-left {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .wrapper-rigth {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    padding-bottom: 80px;
  }

  .title {
    color: var(--white);
    font-size: 48px;
    margin-bottom: 30px;
  }

  .subtitle {
    width: 279px;
    font-size: 16px;
    color: var(--white);
    margin-bottom: 24px;
  }

  span.subline {
    display: inline-block;
    height: 5px;
    width: 50px;
    border: 1px solid red;
  }
`;
