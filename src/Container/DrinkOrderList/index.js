import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

//Action Import
import {removeOrder} from '../../Redux-action/OrderAction'

function DrinkOrderList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const orderList = useSelector(state => state.Orders.assignOrder)
    const onRemoveOrder = (removeId) =>{
        dispatch(removeOrder(removeId));
    }
    const onEditOrder = (editId) =>{
        history.push(`/editorder/${editId}`)
    }
    return (
        <div className="m-5">
            <Table striped hover variant="dark" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Prize</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("orderList", orderList)}
                    {orderList.map((details, index) => {
                        return <tr key={details.id}>
                            <td>{index}</td>
                            <td>{details.firstname}</td>
                            <td>{details.lastname}</td>
                            <td>{details.product}</td>
                            <td>{details.quantity}</td>
                            <td>{details.prize}</td>
                            <td>
                                <Button variant="secondary" onClick={()=>{onEditOrder(details.id)}} className="mr-1"> <i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                                <Button variant="secondary" onClick={()=>{onRemoveOrder(details.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
            {!orderList.length>0 && <div className="text-center">No Record Found</div>}
            {!orderList.length>0 && <div className="text-center mt-3" onClick={()=>{history.push('/order')}}><Button>Place Order</Button></div>}
            {orderList.length>0 && <div className="float-right"><Button onClick={()=>{history.push('/order')}}>Place Order</Button></div>}
        </div>
    )
}

export default DrinkOrderList
