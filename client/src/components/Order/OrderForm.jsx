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

const OrderForm = (props) => {
  const {values, errors, handleInputChange } = props;
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