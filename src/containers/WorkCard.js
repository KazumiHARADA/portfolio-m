/**
 * Created by haradakazumi on 2017/06/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import Card from "react-mdl/lib/Card/Card"
import CardTitle from "react-mdl/lib/Card/CardTitle"
import CardActions from "react-mdl/lib/Card/CardActions"
import Button from "react-toolbox/lib/button"
import Style from "../style.css"

let WorkCard = (prop) => {
    console.log(prop);

    if (prop.data.url == undefined) {
        prop.data.url = "../image/e-commerce.png";
    }

    if (prop.data.title == undefined) {
        prop.data.title = "title";
    }

    if (prop.data.text == undefined) {
        prop.data.text = "text";
    }

    return (
        <Card shadow={0} style={Style.work_card}>
            <CardTitle expand style={{
                color: '#fff',
                background: 'url(' + prop.data.url + ')' + 'bottom right 15% no-repeat #fff'
            }}><h2 className="mdl-card__title-text" style={Style.work_card_title}>{prop.data.title}</h2></CardTitle>
            <span style={Style.work_card_text}>
                {prop.data.text}
            </span>
            <CardActions border>
                <Button colored>Read More</Button>
            </CardActions>
        </Card>
    )
}
WorkCard = connect()(WorkCard)

export default WorkCard
