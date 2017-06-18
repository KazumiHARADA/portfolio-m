/**
 * Created by haradakazumi on 2017/06/18.
 */

const workDialog = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return {
                visibility:"show",
                workId:action.workId
            };
        case 'HIDE_DIALOG':
            return {
                visibility:"hide",
                workId:action.workId
            };
        default:
            return state
    }
}

export default workDialog
