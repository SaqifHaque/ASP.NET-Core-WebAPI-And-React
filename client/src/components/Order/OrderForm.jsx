import React, { useState } from 'react'
import Form from "../../layouts/Form";
import { ButtonGroup, Grid, InputAdornment, makeStyles, Button as MuiButton } from "@material-ui/core";
import Input from "../../controls/Input";
import Select from "../../controls/Select";

const pMethods = [
  {id: 'none', title: 'Select'},
  {id: 'Cash', title: 'Cash'},
  {id: 'Card', title: 'Card'},
]

const useStyles = makeStyles(theme =>  ({
  adornmentText: {
    '& .MuiTypography-root': {
      color: '#f3b33d',
      fontWeight: 'border',
      fontSize: '1.5em'
    }
  }
}))

const OrderForm = (props) => {
  const {values, errors, handleInputChange } = props;
  const classes = useStyles();
  
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
            <Input disabled value={values.orderNumber}  onChange={handleInputChange} label="Order number"
             InputProps={{
              startAdornment: <InputAdornment 
              position="start"
              className={classes.adornmentText}>#</InputAdornment>
            }} name="orderNumber"/>
            <Select label="Customer" onChange={handleInputChange} value={values.customerId} name="customerId" options={[]} />
        </Grid>
        <Grid item xs={6}>
          <Select label="Payment Method" value={values.pMethod}  onChange={handleInputChange} name="pMethod" options={pMethods} />
          <Input disabled value={values.gTotal}  onChange={handleInputChange} label="Grand Total"
           InputProps={{
            startAdornment: <InputAdornment
            position="start"
            className={classes.adornmentText}>$</InputAdornment>
          }} name="gTotal"/>
          <ButtonGroup>
              <MuiButton size="large"/>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Form>
  )
}

export default OrderForm