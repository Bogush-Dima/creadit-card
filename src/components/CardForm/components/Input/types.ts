import {ChangeEvent, FocusEvent} from "react";

export interface Props {
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
}
