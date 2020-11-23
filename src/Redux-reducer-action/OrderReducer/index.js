import {
    ASSIGN_ORDER,
    REMOVE_ORDER,
    EDIT_ORDER
} from '../actionType';
import { toast } from 'react-toastify';

const INIT_STATE = {
    assignOrder: [],
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case ASSIGN_ORDER:
            const data = [action.payload];
            state.assignOrder.map(item => {
                data.push(item)
            })
            toast.success("Place order successfully")
            return { ...state, assignOrder: data };

        case REMOVE_ORDER:
            const removeId = action.payload;
            const newOrderList = state.assignOrder.filter(order => order.id !== removeId);
            return { ...state, assignOrder: newOrderList };
        
        case EDIT_ORDER:
            const Editdata = [action.payload];
            const EditId = action.payload.id;
            const EditOrderList = state.assignOrder.filter(order => order.id !== EditId);
            EditOrderList.map(item => {
                Editdata.push(item)
            })
            toast.success("Place order successfully")
            return { ...state, assignOrder: Editdata };
        default:
            return state;
    }
}