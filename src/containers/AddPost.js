/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import { connect } from 'react-redux'
import { redirectLink } from '../actions'

let AddPost = ({ dispatch }) => {
    let input

    return (
        <div>
            <input ref={(node) => {
                input = node
            }} />
            <button onClick={() => {
                dispatch(redirectLink(input.value))
                input.value = ''
            }}>
                Post
            </button>
        </div>
    )
}
AddPost = connect()(AddPost)

export default AddPost