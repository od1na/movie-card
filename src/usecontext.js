import React, { createContext, useState } from "react";
import data from './mock'


export const odina = createContext()

export const Context = ({children}) => {
    const [card, setCard]=useState(data)
    return (
        <odina.Provider value={[card, setCard]}>{children}</odina.Provider>
    )
}
export default Context