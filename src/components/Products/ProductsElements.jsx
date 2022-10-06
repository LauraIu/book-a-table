import styled from 'styled-components';

export const MenuContainer = styled.section`
    height:auto;
    /* border-bottom:1px solid #fab623; */
    background-color: #000;
    box-shadow: 1px 10px 25px 1px #451300, -1px -5px 15px 5px #fafafa;

    padding-bottom: 3rem;
`
export const MenuHeading = styled.h1`    
    text-align: center;
    font-weight:800;
    font-size:clamp(2.2rem, 2.5vw, 3rem);
    color:red;
    
    padding:3rem 2rem 0rem 2rem;
`

export const MenuSubtitle = styled.p`   
    text-align: center;
    margin-bottom:6rem;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.25rem;
    color: #fab623;
`

export const MenuWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;    
`

export const MenuCard = styled.div`
    margin: 0 2rem;
    line-height:1.5;
    width:300px;
`

export const MenuInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:4rem 2rem 2rem 2rem;
    text-align:center;

    margin: -3rem 0rem 5rem ;

    /* border:3px solid #fab623; */
    background-color:#fff;
    border-radius: 2px;
`
export const MenuImg = styled.img`
    height: 300px;
    min-width:300px;
    max-width: 100%;

    box-shadow: 1px 10px 15px 1px #333, -1px -5px 15px 5px #fab623;
    /* border:1px solid #fab623; */
    border-radius: 150px;
`

export const MenuTitle = styled.h2`
    font-weight:700;
    font-size:1.5rem;
`

export const MenuDescription = styled.p`
    margin-bottom:1rem;
    color:#333;
`

export const MenuPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color:red;
`

