import React from "react";
import { Props } from "./types";
import InputMask from "react-input-mask";
import { TextField } from "@material-ui/core";

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
}: Props) => {
  return (
    <InputMask
      mask={mask}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
    >
      {() => (
        <TextField
          className={className}
          type="text"
          name={name}
          label={label}
          variant="outlined"
          size="small"
          inputProps={{ maxLength: maxLength || 10000 }}
          error={Boolean(errors[name])}
          helperText={errors[name]}
        />
      )}
    </InputMask>
  );
};
