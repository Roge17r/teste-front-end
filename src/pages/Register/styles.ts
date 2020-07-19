import styled from 'styled-components';
import { shade } from 'polished'

import background from '../../assets/background-new.jpg';

export const Container = styled.div`
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
  /* filter: grayscale(0.7); */
  display: flex;
  align-items: stretch;

`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width:700px;

  form{
    margin: 80px 0;
    width: 540px;
    text-align: center;

    h1{
      margin-bottom: 24px;
      color: #232129;
    }

    div{
      display: flex;

      select{
        flex: 1;
        background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        color: #666360;

       option{
          font-size: 16px;
        }
      }

    }


  }
`;
