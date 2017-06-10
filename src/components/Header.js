/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import MDLHeader from "react-mdl/lib/Layout/Header"
import Navigation from "react-mdl/lib/Layout/Navigation"

const Header = () => (
    <MDLHeader title="Title" fixedHeader>
        <Navigation>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
        </Navigation>
    </MDLHeader>
)

export default Header
