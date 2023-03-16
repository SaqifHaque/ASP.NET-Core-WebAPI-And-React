import React, { useState } from 'react'
import Form from "../../layouts/Form";
import { Grid  } from "@material-ui/core";
import Input from "../../controls/Input";
import Select from "../../controls/Select";

const pMethods = [
  {id: 'none', title: 'Select'},
  {id: 'Cash', title: 'Cash'},
  {id: 'Card', title: 'Card'},
]

const generateOrderNumber = () => Math.floor(100000 * Math.random() * 900000).toString();

const getFreshModelObject = () => ({
  orderMasterId: 0,
  orderNumber: generateOrderNumber(),
  customerId: 0,
  pMethod: 'none',
  gTotal: 0,
  deletedOrderItemIds : '',
  orderDetails:[]
})

const OrderForm = () => {
  const [values, setValues] = useState(getFreshModelObject);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const resetFormControls = () => {
    setValues(getFreshModelObject());
  }
  
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
            <Input disabled value={values.orderNumber}  onChange={handleInputChange} label="Order number" name="orderNumber"/>
            <Select label="Customer" onChange={handleInputChange} value={values.customerId} name="customerId" options={[]} />
        </Grid>
        <Grid item xs={6}>
          <Select label="Payment Method" value={values.pMethod}  onChange={handleInputChange} name="pMethod" options={pMethods} />
          <Input disabled value={values.gTotal}  onChange={handleInputChange} label="Grand Total" name="gTotal"/>
        </Grid>
      </Grid>
    </Form>
  )
}

export default OrderForm