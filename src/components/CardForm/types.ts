import { ChangeEvent, FocusEvent } from "react";

export interface Props {
  formik: { [key: string]: any };
  setFieldInFocus: any;
}

export interface InputsProps {
  errors: { [key: string]: string };
  value: string;
  className: string;
  name: string;
  label: string;
  maxLength?: number;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  handleChange?: any;
  formattingName?: (event: ChangeEvent<HTMLInputElement>) => void;
  touched: boolean;
  mask?: any;
}
