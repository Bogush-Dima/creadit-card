import {FocusEvent} from "react";

export interface Props {
  errors: any;
  mask: string;
  value: string;
  className: string;
  name: string;
  label: string;
  maxLength?: number;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  handleChange?: any;
}
