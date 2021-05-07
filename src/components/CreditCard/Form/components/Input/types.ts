import React, { FocusEvent } from 'react'
import { FormikErrors, FormikValues } from 'formik'

export interface Props {
  errors: FormikErrors<FormikValues>
  value: string
  className: string
  name: string
  label: string
  maxLength?: number
  onFocus: (event: FocusEvent<HTMLInputElement>) => void
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  touched: boolean | undefined
}
