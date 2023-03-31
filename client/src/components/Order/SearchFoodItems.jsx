import React, { useEffect, useState } from 'react'
import { createApiEndpoint, ENDPOINTS } from '../../api'
import { IconButton, InputBase, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Paper } from '@material-ui/core';
import SearchTwoToneIcon from 'material-ui/icons/SearchTwoToneIcon';
import PlusOneIcon from 'material-ui/icons/PlusOneIcon';
import ArrowForwardIosIcon from 'material-ui/icons/ArrowForwardIosIcon';


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
    
  }
}))

const SearchFoodItems = () => {

    const [foodItems, setFoodItems] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const classes = useStyles();  

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
        return y.foodItemName.toLowerCase().includes(searchKey.toLowerCase());
      });
      setSearchList(search);

    }, [searchKey])
    
    
  return (
    <>
    <Paper className={classes.searchPaper}>
        <InputBase className={classes.searchInput} value={searchKey}
        onChange={ e => setSearchKey(e.target.value)} placeholder="Search food Items"/>
        <IconButton>
          <SearchTwoToneIcon />
        </IconButton>
    </Paper>
    <List>
      {
        searchList.map((items, index) => (
          <ListItem key={index}>
            <ListItemText primary={items.foodItemName} secondary= {'$' + items.price}/>
            <ListItemSecondaryAction>
              <IconButton>
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