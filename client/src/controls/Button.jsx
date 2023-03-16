import { makeStyles, MuiButton } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        }
    }
}))

const Button = (props) => {
    const { children, color, variant, onClick, className, ...other } = props;
    const classes = useStyles();
  return (
    <MuiButton className={classes.root + ' ' + (className || '')}
    variant={variant || "contained"}
    color={color || "default"}
    onClick={onClick}
    {...other}>
        {children}
    </MuiButton>
  )
}

export default Button