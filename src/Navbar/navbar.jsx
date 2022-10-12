import React, { useContext, useState } from "react";
import { Container, Wrap, InputContainer, IconWrapper } from "./navbarstyle"
import odina from "../usecontext"
export const Navbar = () => {
    const [card, setCard] = useContext(odina)
    
    const changeInput = (e) => {
        const data2 = card.filter((value) => value.name.includes(e.target.value))
        setCard(data2)
    }
    return (
        <Container>
            <Wrap>
                <InputContainer>
                    <InputContainer.Inputs onChange={changeInput} type='text' placeholder='Search movie..' />
                    <IconWrapper/>
                    <InputContainer.Search />
                </InputContainer>
            </Wrap>
            <Wrap></Wrap>
        </Container>
    )
}
export default Navbar