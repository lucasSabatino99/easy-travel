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
    color: var(--white);
  }

  .wrapper-left {
    display: flex;
    flex-direction: column;
    padding: 64px 0 0 0;
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
    font-size: 48px;
    margin-bottom: 30px;
    font-family: 'Sora', sans-serif;
  }

  .subtitle {
    width: 340px;
    font-size: 16px;
    margin-bottom: 24px;
  }

  span.subline {
    display: block;
    height: 1px;
    width: 50px;
    border: 2px solid var(--orange-ligth);
    border-radius: 3px;
  }

  .icon-play {
    font-size: 30px;
    margin-right: 12px;
    color: var(--orange);
  }

  .play-video {
    display: flex;
  }
`;
