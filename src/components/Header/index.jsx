import React from "react";
import { HeaderContainer, Title, Subtitle, Text } from "./HeaderElements";

const Header = () => {
    return (
        <HeaderContainer id="home">
            <Title>{ "MammaMia" } </Title>
            <Subtitle>{ "ITALIAN PIZZERIA" }</Subtitle>
            <Text>{ "SINCE 1966" }</Text>
        </HeaderContainer>
    )
};

export default Header;