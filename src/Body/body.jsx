import React, { useContext, useState } from "react";
import { data } from "../mock";
import { Card, Container } from "./bodystyle";
import odina from "../usecontext"
export const Body = () => {
    const[card, setCard]=useContext(odina)
    return (
        <Container>

            {
                data.map((value) => {
                    return <Card>
                        <Card.Img src={value.url}/>
                        <Card.Name>{ value.name}</Card.Name>
                    </Card>
                })
            }
        </Container>
    )
}
export default Body