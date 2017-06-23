/**
 * Created by haradakazumi on 2017/06/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import { showDialog,hideDialog } from '../actions'
import WorkCard from '../components/WorkCard'


const mapStateToProps = (state) => {

    let active = false;
    if (state.workDialog.visibility == "show") {
        active = true;
    }

    return {
        active:active,
        workId:state.workDialog.workId
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        showDialog: () => {
            dispatch(showDialog(ownProps.workId))
        },
        hideDialog: () => {
            dispatch(hideDialog(ownProps.workId))
        }
    }
}

const Dialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkCard)

export default Dialog