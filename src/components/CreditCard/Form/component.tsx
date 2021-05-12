import React, { ChangeEvent, FocusEvent } from 'react'
import { Grid, Button } from '@material-ui/core'
import { useStyles } from './styles'
import { FormikValuesKeys } from 'components/CreditCard/constants/FormikValuesKeys'
import { InputLabels } from 'components/CreditCard/constants/InputLabels'
import { InputMasks } from 'components/CreditCard/constants/InputMasks'
import { Props } from 'components/CreditCard/Form/types'
import { Input } from 'components/CreditCard/Form/components/Input/component'
import { InputWithMask } from 'components/CreditCard/Form/components/InputWithMask/component'
import { DateInput } from './components/DateInput/component'

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
        <Grid className={classes.gridItem} item md={5}>
          <DateInput
            className={classes.shortField}
            label={InputLabels.Date}
            value={date}
            name={FormikValuesKeys.Date}
            formik={formik}
          />
        </Grid>

        <Grid item className={classes.gridItem} md={5}>
          <InputWithMask
            className={classes.shortField}
            errors={errors}
            mask="999"
            value={cvv}
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
