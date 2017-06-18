/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import Card from "react-mdl/lib/Card/Card"
import CardTitle from "react-mdl/lib/Card/CardTitle"
import WorkCard from "../containers/WorkCard"
import Style from "../style.css"

const Works = () => (
    <section>
        <h4>Works</h4>

        <div style={Style.work_base}>
            <ul style={Style.work_list}>
                <li style={Style.work_item}>
                    <WorkCard data={{url: "../image/e-commerce.png", title:"E-Commerce App", text: "aaaabbbbbccc"}}/>
                </li>
                <li style={Style.work_item}>
                    <WorkCard data={{url: "../image/flea-market.png",title:"Flea Market App", text: "aaaabbbbbccc"}}/>
                </li>
                <li style={Style.work_item}>
                    <WorkCard data={{url: "../image/system.png",title:"System Design", text: "aaaabbbbbccc"}}/>
                </li>
            </ul>
        </div>
    </section>
)

export default Works