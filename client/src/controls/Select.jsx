import { FormControl, FormHelperText, InputLabel, MenuItem, MuiSelect } from '@material-ui/core'
import React from 'react'

const Select = (props) => {
    const { name, label, value, variant, onChange, options, error = null } = props;
  return (
    <FormControl variant={variant || "outlined"}
    {...(error && { error: true })}>
        <InputLabel>{label}</InputLabel>
        <MuiSelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
                {
                    options.map(item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))
                }

        </MuiSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}

export default Select