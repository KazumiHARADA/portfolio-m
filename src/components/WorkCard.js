/**
 * Created by haradakazumi on 2017/06/18.
 */
import React, { PropTypes } from 'react'
import Card from "react-mdl/lib/Card/Card"
import CardTitle from "react-mdl/lib/Card/CardTitle"
import CardActions from "react-mdl/lib/Card/CardActions"
import Button from "react-toolbox/lib/button"
import Dialog from "react-toolbox/lib/dialog"
import Style from "../style.css"

const WorkCard = ({data,workId,showDialog}) => {
    console.log(data);
    console.log(workId);
    console.log(showDialog);

    if (data.url == undefined) {
        data.url = "../image/e-commerce.png";
    }

    if (data.title == undefined) {
        data.title = "title";
    }

    if (data.text == undefined) {
        data.text = "text";
    }

    return (
        <Card shadow={4} style={Style.work_card}>
            <CardTitle expand style={{
                color: '#fff',
                background: 'url(' + data.url + ')' + 'bottom right 15% no-repeat #fff'
            }}><h2 className="mdl-card__title-text" style={Style.work_card_title}>{data.title}</h2></CardTitle>
            <span style={Style.work_card_text}>
                {data.text}
            </span>
            <CardActions border>
                <Button colored onClick={() => {
                    showDialog(workId);
                }}>Read More</Button>
            </CardActions>
            <Dialog active={false} title='My awesome dialog' type="normal">
                <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
            </Dialog>
        </Card>

    )
}

WorkCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text : PropTypes.string.isRequired
    }).isRequired).isRequired,
    workId: PropTypes.number.isRequired,
    showDialog: PropTypes.func.isRequired
}

export default WorkCard
