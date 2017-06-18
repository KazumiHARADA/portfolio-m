/**
 * Created by haradakazumi on 2017/06/18.
 */
import React from 'react'
import { connect } from 'react-redux'
import { showDialog,hideDialog } from '../actions'
import WorkCard from '../components/WorkCard'


const mapStateToProps = (state) => {
    return {
        active: state.workDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showDialog: () => {
            dispatch(showDialog())
        },
        hideDialog: () => {
            dispatch(hideDialog())
        }
    }
}

const Dialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkCard)

export default Dialog