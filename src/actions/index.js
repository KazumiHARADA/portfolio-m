let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}


export const redirectLink = (url) => {
    return {
        type: 'REDIRECT',
        url
    }
}

/** 消すかも **/
export const showDialog = (workId) => {
    return {
        type: 'SHOW_DIALOG',
        workId
    }
}

/** 消すかも **/
export const hideDialog = (workId) => {
    return {
        type: 'HIDE_DIALOG',
        workId
    }
}

let nextWorkId = 0;
export const addWork = (title,description,image_url) => {
    return {
        type: 'ADD_WORK',
        id : nextWorkId++,
        title : title,
        description : description,
        image_url : image_url
    };
}