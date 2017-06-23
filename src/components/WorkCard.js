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

const WorkCard = ({url,title,description,workId,showDialog,hideDialog,active}) => {

    const handleClose = () => {hideDialog(workId)}

    const actions = [{
        label: 'CLOSE',
        onClick: handleClose
    }]

    return (
        <Card shadow={4} style={Style.work_card}>
            <CardTitle expand style={{
                color: '#fff',
                background: 'url(' + url + ')' + 'bottom right 15% no-repeat #fff'
            }}><h2 className="mdl-card__title-text" style={Style.work_card_title}>{title}</h2></CardTitle>
            <span style={Style.work_card_text}>
                {description}
            </span>
            <CardActions border>
                <Button colored onClick={() => {
                    showDialog(workId);
                }}>Read More</Button>
            </CardActions>
            <Dialog actions={actions} onEscKeyDown={handleClose} onOverlayClick={handleClose} active={active} title='My awesome dialog' type="normal">
                <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
            </Dialog>
        </Card>

    )
}

WorkCard.propTypes = {
    url: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    workId: PropTypes.number.isRequired,
    showDialog: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired,
    active:PropTypes.bool.isRequired
}

export default WorkCard
