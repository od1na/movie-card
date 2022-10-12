import React from "react";
import { Container } from './rootstyle'
import Sidebar from '../Sidebar/sidebar'
import Navbar from '../Navbar/navbar'
import Body from '../Body/body'
export const Root = () => {
    return (
        <Container>
            <Sidebar />
            <div style={{ width: '100%' }}>
                <Navbar />
                <Body />
            </div>
        </Container>
    )
}
export default Root