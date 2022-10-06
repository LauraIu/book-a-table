import React from "react";
import {
    MenuContainer,
    MenuHeading,
    MenuWrapper,
    MenuCard,
    MenuImg,
    MenuTitle,
    MenuSubtitle,
    MenuDescription,
    MenuPrice,
    // MenuRating,
    MenuInfo
} from "./ProductsElements.jsx";


const Products = ({heading, data, text}) => {
    return (
        <MenuContainer>
            <MenuHeading>{ heading }</MenuHeading>
            <MenuSubtitle>{ text }</MenuSubtitle>
            <MenuWrapper>
            {data.map((product, index) => {
                return (
                    <MenuCard key={index}>
                        <MenuImg src={product.img} alt={product.alt} />
                        <MenuInfo>
                            <MenuTitle>{product.name}</MenuTitle>
                            <MenuDescription>{product.description}</MenuDescription>
                            <MenuPrice>{product.price}</MenuPrice>
                        </MenuInfo>
                    </MenuCard>
                );
            })}
            </MenuWrapper>
        </MenuContainer>
    )
};

export default Products;