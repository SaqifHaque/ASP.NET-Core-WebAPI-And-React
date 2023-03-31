import { Grid } from '@material-ui/core';
import React from 'react'
import { useForm } from '../../hooks/useForm';
import OrderedFoodItems from './OrderedFoodItems';
import OrderForm from './OrderForm'
import SearchFoodItems from './SearchFoodItems';

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

const Order = () => {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls
  } = useForm(getFreshModelObject);


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <OrderForm {...{values, errors, handleInputChange}}/>
      </Grid>
      <Grid item xs={6}>
          <SearchFoodItems
          {...{values, setValues}}
          />
      </Grid>
      <Grid item xs={6}>
          <OrderedFoodItems
          {...{values, setValues}}
          />
      </Grid>
    </Grid>
  )
}

export default Order