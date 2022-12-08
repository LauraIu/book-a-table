import React from "react";
import {
  IntroContainer,
  IntroText,
  IntroTitle,
  IntroBigTitle,
} from "./IntroElements";

const Introduction = () => {
  return (
    <IntroContainer id="about">
      <IntroTitle>{"Once upon a time..."}</IntroTitle>
      <IntroBigTitle>{"MammaMia's short history"}</IntroBigTitle>
      <IntroText>
        <strong>
          {
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Ipsum has been the industry's standard dummy text ever since the 1500s."
          }
        </strong>
      </IntroText>
      <IntroText>
        {" "}
        {
          "Our restaurants are filled with the authentic scents of Italian food as the chefs prepare the pizzas. All guests are welcomed the Italian way with warm hugs, laughter, and endless smiles. Each restaurant offers a chance for people to visit Italy without stamping their passports. Wood-fired ovens are imported from Naples with the cooking surface made of lava stone, directly from the Vesuvius, assuring the authenticity of the pizza. Every aspect of the pizzeria embraces the traditional Neapolitan culture. Decorated with Pulcinella masks, hanging Parma prosciuttos, chillies, flasks, and entire Parmigiano wheels, we’ve created a little slice of Naples."
        }
      </IntroText>
    </IntroContainer>
  );
};

export default Introduction;
