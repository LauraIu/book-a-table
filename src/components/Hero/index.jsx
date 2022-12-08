import React from "react";
import {
  HeroContainer,
  HeroContent,
  Title,
  Subtitle,
  Text,
} from "./HeroElements";

import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <Title>{"Enjoy the taste of traditional hospitality!"} </Title>
        <span>
          <Subtitle>
            {"At "}
            <strong>
              <em>{"MammaMia"}</em>
            </strong>{" "}
            {
              "You can't just eat, beneath the delightful pizza's You will experience the whole magic of high quality service."
            }
            <br />
            {/* <br />
            {
              "Since 1966 Our Family Made The Tradition Live, We Are Using The Same Recipe Since Then And We Are Proud To Keep It Tasty For Your Desire!"
            } */}
          </Subtitle>
        </span>
        <NavBtn>
          <NavBtnLink
            to="#booking"
            smooth
            // spy={true}
            duration={500}
            exact="true"
            offset={0}
          >
            Book Your Table!
          </NavBtnLink>
        </NavBtn>
        <Text>
          {
            "Make your reservation one week in advance to gain our bonus surprise!"
          }
        </Text>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
