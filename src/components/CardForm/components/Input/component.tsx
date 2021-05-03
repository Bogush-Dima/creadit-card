import React from "react";
import { TextField } from "@material-ui/core";
import { InputsProps } from "../../types";

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
  formattingName,
}: InputsProps) => {
  return (
    <TextField
      className={className}
      type="text"
      name={name}
      label={label}
      variant="outlined"
      size="small"
      onChange={formattingName || handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      error={Boolean(errors[name])}
      helperText={errors[name]}
      inputProps={{ maxLength: maxLength || 10000 }}
      value={value}
    />
  );
};
