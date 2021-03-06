import React from 'react'
import { TextField } from '@material-ui/core'
import { Props } from 'components/CreditCard/Form/components/Input/types'

export const Input = ({
  errors,
  value,
  className,
  name,
  label,
  maxLength,
  onFocus,
  onBlur,
  handleChange,
  touched,
}: Props): React.ReactElement => {
  return (
    <TextField
      className={className}
      type="text"
      name={name}
      label={label}
      variant="outlined"
      size="small"
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      error={touched && Boolean(errors[name])}
      helperText={touched ? errors[name] : ''}
      inputProps={{ maxLength: maxLength || 10000 }}
      value={value}
    />
  )
}
