import styled from "styled-components"
import archive1 from "..//..//IMG/MammaMia_cuisine_2.jpeg"
import archive2 from "..//..//IMG/MammaMia_interior.jpeg"

export const IntroContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;

    padding:4rem 2rem 2rem 2rem;
    margin: 0rem auto;  
    border-bottom:2px solid #fab623;
`
export const IntroTitle = styled.h2`
    font-weight:600;
    font-size:1.5rem;
    font-style: italic;
    line-height:80%;
    margin-bottom:0.75rem;
    color:#f10707;
`
export const IntroBigTitle = styled.h1`
    font-weight:800;
    font-size:clamp(2.2rem, 2.5vw, 2rem);
    color:#333;
    line-height:150%;
    border-bottom:3px solid red;
`

export const IntroText = styled.p`
    width: 60vw;
    text-align: center;
    font-style: italic;
    font-size:1.2rem;
    padding: 2rem 0rem;
    margin-bottom: 2rem;

    color:#666;
    
    /* background:url(${archive1});
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat; */  
`


export const IntroImg = [
    {
        img: archive1,
        alt: "MammaMia pizzeria interior"
    },
    {
        img: archive2,
        alt: "Making pizza at MammaMia pizzeria"
    }
];

