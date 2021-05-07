import React, { ChangeEvent, FocusEvent } from 'react'
import { Grid, Button } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFns from '@date-io/date-fns'
import { useStyles } from './styles'
import { FormikValuesKeys } from 'components/CreditCard/constants/FormikValuesKeys'
import { InputLabels } from 'components/CreditCard/constants/InputLabels'
import { InputMasks } from 'components/CreditCard/constants/InputMasks'
import { Props } from 'components/CreditCard/Form/types'
import { Input } from 'components/CreditCard/Form/components/Input/component'
import { InputWithMask } from 'components/CreditCard/Form/components/InputWithMask/component'

export const Form: React.FC<Props> = ({ formik, setFieldInFocus }: Props) => {
  const classes = useStyles()
  const {
    handleChange,
    handleBlur,
    setFieldValue,
    resetForm,
    errors,
    touched,
    dirty,
    isValid,
  } = formik
  const { cardNumber, name, date, cvv } = formik.values

  const onFocus = (event: FocusEvent<HTMLInputElement>): void => {
    setFieldInFocus(event.target.name)
  }

  const onBlur = (event: FocusEvent<HTMLInputElement>): void => {
    setFieldInFocus('')
    handleBlur(event)
  }
  //TODO think about it, maybe better to do date picker it own component
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

  const changeName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    if (!value.match(/[0-9]/)) {
      setFieldValue(FormikValuesKeys.Name, event.target.value.toUpperCase())
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputWithMask
        errors={errors}
        mask={InputMasks.CardNumber}
        value={cardNumber}
        className={classes.longField}
        name={FormikValuesKeys.CardNumber}
        label={InputLabels.CardNumber}
        maxLength={20}
        onFocus={onFocus}
        onBlur={onBlur}
        handleChange={handleChange}
        touched={touched.cardNumber}
      />

      <Input
        errors={errors}
        value={name}
        className={classes.longField}
        name={FormikValuesKeys.Name}
        label={InputLabels.Name}
        onFocus={onFocus}
        onBlur={onBlur}
        handleChange={changeName}
        touched={touched.name}
      />

      <Grid container justify="space-between">
        <Grid item md={5}>
          <MuiPickersUtilsProvider utils={DateFns}>
            <DatePicker
              label={InputLabels.Date}
              value={dateParse(date)}
              name={FormikValuesKeys.Date}
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
        </Grid>

        <Grid item md={5}>
          <InputWithMask
            errors={errors}
            mask="999"
            value={cvv}
            className={classes.shortField}
            name={FormikValuesKeys.Cvv}
            label={InputLabels.Cvv}
            maxLength={4}
            onFocus={onFocus}
            onBlur={onBlur}
            handleChange={handleChange}
            touched={touched.cvv}
          />
        </Grid>
      </Grid>

      <Grid container className={classes.buttonWrapper} justify="center" alignItems="center">
        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid || !dirty}
        >
          Submit
        </Button>

        <Button className={classes.button} type="reset" variant="contained" onClick={resetForm}>
          Reset
        </Button>
      </Grid>
    </form>
  )
}
