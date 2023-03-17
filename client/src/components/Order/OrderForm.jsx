import React, { useEffect, useState } from 'react'
import Form from "../../layouts/Form";
import { ButtonGroup, Grid, InputAdornment, makeStyles, Button as MuiButton } from "@material-ui/core";
import Input from "../../controls/Input";
import Select from "../../controls/Select";
import Button from "../../controls/Button";
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReorderIcon from '@material-ui/icons/Reorder';
import { createApiEndpoint, ENDPOINTS } from '../../api';


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
  },
  submitButtonGroup: {
    backgroundColor: '#f3b33d',
    color: '#000',
    margin: theme.spacing(1),
    '& .MuiButton-label': {
      textTransfrom: 'none',
    },
    '& hover': {
      backgroundColor: '#f3b33d'
    }
  }
}))

const OrderForm = (props) => {
  const {values, errors, handleInputChange } = props;
  const classes = useStyles();
  const [ customerList, setCustomerList ] = useState([]);

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.CUSTOMER).fetchAll()
    .then(res => {
      let customerList = res.data.map((item) => ({
        id: item.customerId,
        title: item.customerName 
      }))
      customerList = [{ id: 0, title: 'Select' }].concat(customerList);
      setCustomerList(customerList);
    } )
    .catch((err) => console.log(err));
  }, [])
  
  
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
            <Select label="Customer" onChange={handleInputChange} value={values.customerId} name="customerId" options={customerList} />
        </Grid>
        <Grid item xs={6}>
          <Select label="Payment Method" value={values.pMethod}  onChange={handleInputChange} name="pMethod" options={pMethods} />
          <Input disabled value={values.gTotal}  onChange={handleInputChange} label="Grand Total"
           InputProps={{
            startAdornment: <InputAdornment
            position="start"
            className={classes.adornmentText}>$</InputAdornment>
          }} name="gTotal"/>
          <ButtonGroup className={classes.submitButtonGroup}>
              <MuiButton size="large" endIcon={<RestaurantMenuIcon/>} type="submit">Submit</MuiButton>
              <MuiButton size="small" startIcon={<ReplayIcon/>}>Submit</MuiButton>
          </ButtonGroup>
          <Button size='large' startIcon={<ReorderIcon/>}>Orders</Button>
        </Grid>
      </Grid>
    </Form>
  )
}

export default OrderForm