import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.button`

      background: #F3B800;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width:540px;
      height:56px;
      font-size: 24px;
      font-weight: bold;
      margin-top: 16px;
      transition: background-color 0.2s ;

      &:hover{
        background: ${shade(0.2, '#F3B800')};

    }
`;
