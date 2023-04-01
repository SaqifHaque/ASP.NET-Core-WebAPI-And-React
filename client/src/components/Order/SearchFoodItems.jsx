import React, { useEffect, useState } from 'react'
import { createApiEndpoint, ENDPOINTS } from '../../api'
import { IconButton, InputBase, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Paper } from '@material-ui/core';
import SearchTwoToneIcon from 'material-ui/icons/SearchTwoTone';
import PlusOneIcon from 'material-ui/icons/PlusOneIcon';
import ArrowForwardIosIcon from 'material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles (theme => ({
  searchPaper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  searchInput: {
    marginLeft: theme.spacing(1.5),
    flex: 1
  },
  listRoot: {
    marginTop: theme.spacing(),
    maxHeight: 450,
    overflow: 'auto',
    '& li:hover': {
      cursor: 'pointer',
      backgroundColor: '#E3E3E3'
    },
    '& li:hover .MuiButtonBase-root': {
      display: 'block',
      color: '#000'
    },
    '& .MuiButtonBase-root': {
      display: 'none'
    },
    '& .MuiButtonBase-root:hover': {
      backgroundColor: 'transparent'
    }
  }
}))

const SearchFoodItems = (props) => {

    const  { values, setValues } = props;
    const [foodItems, setFoodItems] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const classes = useStyles();  

    let orderedFoodItems = values;

    useEffect(() => {
        createApiEndpoint(ENDPOINTS.FOODITEM).fetchAll()
        .then((res) => {
          setFoodItems(res.data);
          setSearchList(res.data);
        })
        .catch((err) => console.log(err));
    }, [])

    useEffect(() => {
      let search = [...foodItems];
      search = search.filter(y => {
        return y.foodItemName.toLowerCase().includes(searchKey.toLowerCase()) &&
         orderedFoodItems.every(item => item.foodItemId !== y.foodItemId);
      });
      setSearchList(search);

    }, [searchKey, orderedFoodItems])

    const addFoodItem = foodItem => {
      let item = {
        orderMasterId: values.orderMasterId,
        orderDetailId: 0,
        foodItemId: foodItem.foodItemId,
        quantity: 1,
        foodItemPrice: foodItem.price,
        foodItemName: foodItem.foodItemName
      }
      setValues({...values, orderDetails: [...values, orderedFoodItems.item]})
    }
    
    
  return (
    <>
    <Paper className={classes.searchPaper}>
        <InputBase className={classes.searchInput} value={searchKey}
        onChange={ e => setSearchKey(e.target.value)} placeholder="Search food Items"/>
        <IconButton>
          <SearchTwoToneIcon />
        </IconButton>
    </Paper>
    <List className={classes.listRoot}>
      {
        searchList.map((item, index) => (
          <ListItem key={index} onClick={e => addFoodItem(item)}>
            <ListItemText primary={item.foodItemName} secondary= {'$' + item.price}/>
            <ListItemSecondaryAction>
              <IconButton onClick={e => addFoodItem(item)}>
                  <PlusOneIcon/>
                  <ArrowForwardIosIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      }
    </List>
    </>
  )
}

export default SearchFoodItems