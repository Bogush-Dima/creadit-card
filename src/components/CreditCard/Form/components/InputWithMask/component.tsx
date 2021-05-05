import React from 'react'
import { Props } from 'components/CreditCard/Form/components/InputWithMask/types'
import InputMask from 'react-input-mask'
import { TextField } from '@material-ui/core'

export const InputWithMask = ({
  errors,
  mask,
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
    <InputMask mask={mask} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} value={value}>
      {(): React.ReactElement => (
        <TextField
          className={className}
          type="text"
          name={name}
          label={label}
          variant="outlined"
          size="small"
          inputProps={{ maxLength: maxLength || 10000 }}
          error={Boolean(errors[name]) && touched}
          helperText={touched ? errors[name] : ''}
        />
      )}
    </InputMask>
  )
}
