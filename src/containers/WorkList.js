/**
 * Created by kharada on 2017/06/23.
 */
import { connect } from 'react-redux'
import Works from '../components/Works'
import { showDialog,hideDialog } from '../actions'

const mapStateToProps = (state) => {
    return {
        works: state.works
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

const WorkList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Works)

export default WorkList
