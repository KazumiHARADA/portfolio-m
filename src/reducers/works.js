/**
 * Created by kharada on 2017/06/23.
 */
const work = (state, action) => {
    switch (action.type) {
        case 'ADD_WORK':
            return {
                id: action.id,
                title: action.title,
                description: action.description,
                image_url: action.image_url,
                visible: false
            };

        case 'SHOW_WORK':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                visible: true
            });

        case 'HIDE_WORK':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                visible: false
            });

        default:
            return state
    }
}

const works = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WORK':
            return [
                ...state,
                work(undefined, action)
            ];

        case 'SHOW_WORK':
            return state.map((t) =>
                work(t, action)
            );

        case 'HIDE_WORK':
            return state.map((t) =>
                work(t, action)
            );

        default:
            return state
    }
}

export default works