import styled from 'styled-components';
import { colors } from '../utils/styles/color.style';

export const Container = styled.div`
    background: 
 `;

export const UserLoginBox = styled.div`
    border: 1px solid ${colors.dark};
    border-radius: 2.5px;
    margin: 50px auto;
    text-align: center;
    padding: 20px;
    width: 500px;
`;

export const UserInput = styled.input`
    border: 1px solid ${colors.light};
    padding: 5px;
`;

export const UserButton = styled.button`
    background: ${colors.dark};
    border: 0;
    padding: 6px;
    color: ${colors.white};
    margin-top: 15px;
    cursor: pointer;
    
    &:hover {
        background: ${colors.medium};
    }    

`;