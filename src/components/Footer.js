import React from 'react'
import MDLFooter from "react-mdl/lib/Footer/Footer"
import FABButton from "react-mdl/lib/FABButton"
import Style from "../style.css"

const Footer = () => (
    <MDLFooter size="mini">
        <div style={Style.footer}>
            Contact me
            <div>
                <FABButton style={Style.clear_background} ripple>
                    <img src="../image/Twitter.svg"/>
                </FABButton>
                <FABButton style={Style.clear_background} ripple>
                    <img src="../image/Github.svg"/>
                </FABButton>
                <FABButton style={Style.clear_background} ripple>
                    <img src="../image/Facebook.svg"/>
                </FABButton>
                <FABButton style={Style.clear_background} ripple>
                    <img src="../image/Mail.svg"/>
                </FABButton>
            </div>
        </div>

    </MDLFooter>
)

export default Footer
