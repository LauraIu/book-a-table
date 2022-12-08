import styled from "styled-components"
// import archive1 from "..//..//IMG/MammaMia_cuisine_2.jpeg"
// import archive2 from "..//..//IMG/MammaMia_interior.jpeg"

export const IntroContainer = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    text-align:center;
    height:100vh;

    padding:8rem 2rem 8rem 2rem;
    margin: 0rem auto;  
    border-bottom:1px solid #fab623; 
    
    @media screen and (max-height:760px){
      height:auto;
      margin: 2rem auto 0; 
    }

`
export const IntroTitle = styled.h2`
    font-weight:600;
    font-size:1.5rem;
    font-style: italic;
    line-height:80%;
    margin-bottom:0.75rem;
    color:#f10707;

    @media screen and (max-height:760px){
      padding-top: 2rem; 
    }

    @media screen and (min-width: 1500px) {
    font-size: 1.8rem;
  }
`
export const IntroBigTitle = styled.h1`
    font-weight:800;
    font-size:clamp(2.2rem, 2.5vw, 2rem);
    color:#170f0b;
    line-height:4rem;
    margin: 4rem auto 2rem auto;
    border-bottom:3px solid red;

    @media screen and (max-width:360px){
      font-size:1.9rem;
      font-weight:800;
    }

    @media screen and (max-height:760px){
      line-height:3.5rem;
      margin: 2rem auto;
    }

    @media screen and (min-width: 1500px) {
    font-size:2.5rem;
    line-height:5rem;
  }
`

export const IntroText = styled.p`
    max-width:1024px;
    text-align: center;
    /* font-style: italic; */
    font-size:1.5rem;
    line-height: 3rem;
    text-align: justify;
    padding: 2rem 0rem;
    margin-bottom: 2rem;

    color:#170f0b;
   
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat; 

    @media screen and (max-width: 760px) {
      line-height: 2rem;
      padding: 0;
    }

    @media screen and (min-width: 1500px) {
    font-size: 2rem;
    line-height: 1.5;
  }
`


// export const IntroImg = [
//     {
//         img: archive1,
//         alt: "MammaMia pizzeria interior"
//     },
//     {
//         img: archive2,
//         alt: "Making pizza at MammaMia pizzeria"
//     }
// ];

