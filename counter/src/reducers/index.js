/**
 * Created by lantu on 2017/11/2.
 */

export default (state = 0,action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
