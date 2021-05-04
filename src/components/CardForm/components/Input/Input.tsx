import React from "react";
import { TextField } from "@material-ui/core";
import InputsProps from "./InputProps";

const Input = ({
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
  touched,
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
      error={touched && Boolean(errors[name])}
      helperText={touched ? errors[name] : ''}
      inputProps={{ maxLength: maxLength || 10000 }}
      value={value}
    />
  );
};

export default Input;
