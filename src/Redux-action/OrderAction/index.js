import {ASSIGN_ORDER,REMOVE_ORDER,EDIT_ORDER} from '../../Redux-reducer-action/actionType'
export const placeOrder = (orderData) =>{
    return (dispatch) =>{
        dispatch({ type: ASSIGN_ORDER, payload: orderData });
    }
}

export const removeOrder = (removeId) =>{
    return (dispatch) =>{
        dispatch({ type: REMOVE_ORDER, payload: removeId });
    }
}

export const editOrder = (orderData) =>{
    return(dispatch) =>{
        dispatch({type:EDIT_ORDER, payload: orderData})
    }
}