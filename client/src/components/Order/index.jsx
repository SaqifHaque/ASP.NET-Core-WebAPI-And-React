import React from 'react'
import { useForm } from '../../hooks/useForm';
import OrderForm from './OrderForm'

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
    <OrderForm {...{values, errors, handleInputChange}}/>
  )
}

export default Order