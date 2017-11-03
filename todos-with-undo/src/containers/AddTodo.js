/**
 * Created by lantu on 2017/11/2.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = (props) => {
    let input;
    let { dispatch } = props;

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input ref={(node) => {input = node}} />
                <button type="submit">
                    {`Add Todo`}
                </button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)
export default AddTodo
