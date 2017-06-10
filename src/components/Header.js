/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import Appbar from 'muicss/lib/react/appbar';

let s1 = {verticalAlign: 'middle'};
let s2 = {textAlign: 'right'};


const Header = () => (
    <Appbar>
        <table width="100%">
            <tbody>
            <tr style={s1}>
                <td className="mui--appbar-height">Left Side</td>
                <td className="mui--appbar-height" style={s2}>Right Side</td>
            </tr>
            </tbody>
        </table>
    </Appbar>
)

export default Header
