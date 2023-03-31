import { Button, ButtonGroup, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper } from '@material-ui/core';
import React from 'react'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

const OrderedFoodItems = (props) => {
  const { values, setValues } = props;

  let orderedFoodItems = values.orderDetails;

  const updateQuantity = (index, value) => {
    let quantity = {...values};
    let foodItem = quantity.orderDetails[index];
    if(foodItem.quantity + value > 0){
      foodItem.quantity += value;
      setValues({...quantity}); 
    }
  }

  const removeFoodItem = (index, id) => {
    let item = {...values};
    item.orderDetails = item.orderDetails.filter((_, i) => i !== index);
    setValues({...item});

    setValues({...values, orderDetails: [...values.orderDetails, item]})
  }

  return (
    <List>
        {
          orderedFoodItems.map((item, index) => (
            <Paper key={index}>
                <ListItem>
                  <ListItemText primary={item.foodItemName} primaryTypographyProps={{
                    component: 'h1',
                    style: {
                      fontWeight: '500',
                      fontSize: '1.2em'
                    }
                  }}
                  secondary= {
                    <>
                      <ButtonGroup size="small">
                        <Button onClick={e => updateQuantity(index, -1)}>-</Button>
                        <Button disabled>{item.quantity}</Button>
                        <Button onClick={e => updateQuantity(index, 1)}>+</Button>
                      </ButtonGroup>
                    </>
                  }>
                    <ListItemSecondaryAction>
                      <IconButton disableRipple onClick={e => removeFoodItem(index, item.orderDetailsId)}>
                        <DeleteTwoToneIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItemText>
                </ListItem>
            </Paper>
          ))
        }
    </List>
  )
}

export default OrderedFoodItems