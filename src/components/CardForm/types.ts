import {ChangeEvent, FocusEvent} from "react";

export interface Props {
  formik: any;
  setFieldInFocus: any;
}

export interface InputsProps {
  errors: any;
  value: string;
  className: string;
  name: string;
  label: string;
  maxLength?: number;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  handleChange?: any;
  formattingName?: (event: ChangeEvent<HTMLInputElement>) => void;
  mask?: any;
}
