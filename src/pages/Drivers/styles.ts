import styled, { css } from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background-list.jpg';

export const Container = styled.div`
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  /* flex-direction: column; */
  align-items: center;

  place-content: center;


  width: 100%;
  max-width: 700px;



  div {
    display: flex;
    flex-direction: column;
    background-color: #232129;
    border-radius: 10px;
    min-width: 320px;
    padding: 16px;

    margin: 4px;
    position: relative;

    input {
      position: absolute;
      right: 16px;
      top: 22px;
      transform: scale(1.5);
    }

    svg {
      position: absolute;
      right: 8px;
      bottom: 16px;
      cursor: pointer;
    }
    p
  }
`;
