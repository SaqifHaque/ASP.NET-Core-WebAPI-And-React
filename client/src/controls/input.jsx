import React from 'react';
import { TextField } from '@material-ui/core';

const input = (props) => {
    const { name, label, value, variant, onChange, error = null, ...other } = props;
    return (
        <TextField variant={variant || "outlined"} label={label} name={name} value={value} onChange={onChange} {...other}
        {...(error && { error: true, helperText: error })} />
    )
}

export default input