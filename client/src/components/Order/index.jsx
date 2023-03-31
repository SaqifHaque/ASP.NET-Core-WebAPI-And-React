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

  const addFoodItem = foodItem => {
    let item = {
      orderMasterId: values.orderMasterId,
      orderDetailId: 0,
      foodItemId: foodItem.foodItemId,
      quantity: 1,
      foodItemPrice: foodItem.foodItemPrice,
      foodItemName: foodItem.foodItemName
    }
    setValues({...values, orderDetails: [...values.orderDetails, item]})
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <OrderForm {...{values, errors, handleInputChange}}/>
      </Grid>
      <Grid item xs={6}>
          <SearchFoodItems/>
      </Grid>
      <Grid item xs={6}>
          <OrderedFoodItems/>
      </Grid>
    </Grid>
  )
}

export default Order