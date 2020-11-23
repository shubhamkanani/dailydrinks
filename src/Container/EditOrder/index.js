import React from 'react'
import OrderForm from '../../Components/OrderForm'
function EditOrder(props) {
    return (
        <div>
            <OrderForm EditId={props.match.params.id} pageName="Edit Drinking Order Form"/>
        </div>
    )
}

export default EditOrder
