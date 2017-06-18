/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import DialogWorkCard from "../containers/DialogWorkCard"
import Style from "../style.css"

const Works = () => (
    <section>
        <h4>Works</h4>

        <div style={Style.work_base}>
            <ul style={Style.work_list}>
                <li style={Style.work_item}>
                    <DialogWorkCard data={{url: "../image/e-commerce.png", title:"E-Commerce App", text: "aaaabbbbbccc"}} workId={1}/>
                </li>
                <li style={Style.work_item}>
                    <DialogWorkCard data={{url: "../image/flea-market.png",title:"Flea Market App", text: "aaaabbbbbccc"}} workId={2}/>
                </li>
                <li style={Style.work_item}>
                    <DialogWorkCard data={{url: "../image/system.png",title:"System Design", text: "aaaabbbbbccc"}} workId={3}/>
                </li>
            </ul>
        </div>
    </section>
)

export default Works
