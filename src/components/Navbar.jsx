import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive'
import { Link } from "react-router-dom";

export const Navbar = ()=>{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color:"gray",fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>e-Comm</Logo></Center>
                <Right>
                    <MenuItem>
                        <Link to="/">HOME</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/prodlist">PRODUCT LIST</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/prod">PRODUCT</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/register">REGISTER</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/signin">LOGIN</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/cart">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    height:60px;
    ${mobile({
        height:"50px"
    })}
`

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({
        padding:"10px 0px"
    })}
`

const Left = styled.div`
    flex:1;
    display:flex;
`

const Language = styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({
        display:"none"
    })}
`
const SearchContainer = styled.div`
    border:0.5px solid lightgrey;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
    border:none;
    ${mobile({
        width:"50px"
    })}
`

const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    ${mobile({
        justifyContent:"center",
        flex:2
    })}
`

const Center = styled.div`
    flex:1;
    text-align:center;
`

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({
        fontSize:"20px"
    })}
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:ponter;
    margin-left:25px;
    ${mobile({
        fontSize:"12px",
        marginLeft:"10px"
    })}
`