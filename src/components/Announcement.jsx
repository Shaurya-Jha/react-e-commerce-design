import styled  from "styled-components";
import React from "react";

export const Announcement = ()=>{
    return(
        <Container>
            <p>Super Deal! Free Shipping on Orders Over $50</p>
        </Container>
    )
}

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    margin:15px 0 0 0;
`