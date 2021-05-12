import React from 'react'
import { FormikValuesKeys } from '../../../constants/FormikValuesKeys'
import DateFns from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Props } from './types'

export const DateInput: React.FC<Props> = ({ className, label, value, name, formik }: Props) => {
  const { setFieldValue } = formik

  const changeDate = (value: Date): void => {
    const year = value.getFullYear() - 2000
    const month = value.getMonth() + 1
    setFieldValue(FormikValuesKeys.Date, `${month < 10 ? '0' + month : month}/${year}`)
  }

  const dateParse = (value: string): Date => {
    if (value) {
      const dateArr = value.split('/')
      return new Date(Number(dateArr[1]) + 2000, Number(dateArr[0]) - 1)
    }
    return new Date()
  }

  const minDate = (): Date => {
    const minMonth = new Date().getMonth()
    const minYear = new Date().getFullYear()
    return new Date(minYear, minMonth, 1)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFns}>
      <DatePicker
        className={className}
        label={label}
        value={dateParse(value)}
        name={name}
        onChange={changeDate}
        views={['month', 'year']}
        inputVariant="outlined"
        size="small"
        minDate={minDate()}
        maxDate={new Date(2099, 11)}
        minDateMessage="Date should not be before today date"
        format="MM/yy"
      />
    </MuiPickersUtilsProvider>
  )
}
