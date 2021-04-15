import styled from 'styled-components';

export const Base = styled.div`
    background-color:#1f2147;
    width: 100%;
    border-radius: ${({accordion})=> accordion ? '15px 15px 0 0' : '15px'};
    height: 75px;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items:center;
    @media (min-width: 768px) {
        height:60px;
    }
    
`;

export const Title = styled.span`
    font-size:16px !important;
`;

export const Wrapper = styled.span`
    padding-left:20px;
`;