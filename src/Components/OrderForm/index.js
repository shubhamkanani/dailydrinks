import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'

//Action Import
import { placeOrder, editOrder } from '../../Redux-action/OrderAction'

function OrderForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const oldOrder = useSelector((state) => {
        return state.Orders.assignOrder;
    });
    const [inputData, setInputData] = useState({
        id: "",
        firstname: "",
        lastname: "",
        product: "coco",
        prize: "$10",
        quantity: 1
    })
    useEffect(() => {
        console.log("exit......")
        if (props.EditId) {
            console.log(props.EditId)
            let data;
            oldOrder.map((details) => {
                if (details.id == props.EditId) {
                    console.log("enter")
                    data = details
                }
            })
            console.log("data", data)
            if (data) {
                setInputData(data)
            }
        }
    }, [])
    useEffect(() => {
        if (inputData.product === "ThumsUp") {
            setInputData({ ...inputData, prize: "$" + inputData.quantity * 30 });
        }
        else if (inputData.product === "Coco") {
            setInputData({ ...inputData, prize: "$" + inputData.quantity * 10 });
        }
        else if (inputData.product === "Mirinda") {
            setInputData({ ...inputData, prize: "$" + inputData.quantity * 20 });
        }
    }, [inputData.product, inputData.quantity])

    const changeInput = (event) => {
        console.log(event.target.name, " : ", event.target.value);
        setInputData({ ...inputData, [event.target.name]: event.target.value });
    }

    const onPlaceOrder = () => {

        if (inputData.firstname && inputData.lastname) {
            let max = Math.max.apply(Math, oldOrder.map(function (o) { return o.id; }))

            let key = (max && max > 0) ? max + 1 : 1;

            const finalOrderStat = {
                ...inputData,
                id: key
            }
            dispatch(placeOrder(finalOrderStat));
            history.push('/orderlist')
        }
        else {
            toast.error("Please Fill Your First Name and Last Name !");
        }
    }
    const onEditOrder = () => {

        if (inputData.firstname && inputData.lastname) {
            dispatch(editOrder(inputData));
            history.push('/orderlist')
        }
        else {
            toast.error("Please Fill Your First Name and Last Name !");
        }
    }
    return (
        <div id="orderForm" className="container">
            <Form>
                <h3 className="text-left mt-5 mb-5">{props.pageName ? props.pageName : " "}</h3>

                <Row className='mb-3'>
                    <Col sm={6}>
                        <Form.Control type='text' name='firstname' value={inputData.firstname} placeholder="Enter First Name" onChange={changeInput} required />
                    </Col>
                    <Col sm={6}>
                        <Form.Control type='text' name='lastname' value={inputData.lastname} placeholder="Enter Last Name" onChange={changeInput} required />
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col sm={4}>
                        <Form.Label className="text-left mt-1"><b>Choose Product:</b></Form.Label>
                    </Col>
                    <Col sm={8}>
                        <Form.Control as="select" name="product" defaultValue={inputData.product} onChange={changeInput}>
                            <option value="Coco">Coco</option>
                            <option value="ThumsUp">ThumsUp</option>
                            <option value="Mirinda">Mirinda</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col sm={6}>
                        <Row>
                            <Col sm={4}>
                                <Form.Label className="text-left mt-1"><b>Prize :</b></Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control type='text' name='Last Name' value={inputData.prize} placeholder="Prize Of Drink" disabled />
                            </Col>
                        </Row>

                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <Form.Label className="text-left mt-1"><b>Quantity :</b></Form.Label>
                            </Col>
                            <Col sm={6}>
                                <Form.Control as="select" name="quantity" defaultValue={inputData.quantity} onChange={changeInput}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </Form.Control>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Button className="w-100" variant="secondary" onClick={()=>{history.push('/orderlist')}}>Back To List</Button>
                    </Col>
                    <Col sm={6}>
                        {props.pageName === "Drinking Order Form" && <Button className="w-100" onClick={onPlaceOrder}>Place Order</Button>}
                        {props.pageName === "Edit Drinking Order Form" && <Button className="w-100" onClick={onEditOrder}>Edit Order</Button>}
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default OrderForm
