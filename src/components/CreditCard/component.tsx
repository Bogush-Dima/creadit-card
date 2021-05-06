import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './styles'
import { View } from 'components/CreditCard/View/component'
import { Form } from 'components/CreditCard/Form/component'
import { useFormik, FormikValues } from 'formik'
import * as yup from 'yup'
import { InitialFormikValues } from './types'

export const CreditCard: React.FC = () => {
  const classes = useStyles()
  const [fieldInFocus, setFieldInFocus] = useState('')

  const initialValues: FormikValues = {
    cardNumber: InitialFormikValues.cardNumber,
    name: InitialFormikValues.name,
    date: InitialFormikValues.date,
    cvv: InitialFormikValues.cvv,
  }

  const SignupSchema = yup.object({
    cardNumber: yup
      .string()
      .matches(/^[456]/, 'Number should start with 4, 5, or 6')
      .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Number isn't completed")
      .length(19, 'Number must have 16 characters')
      .required('Number is required'),
    name: yup
      .string()
      .matches(/\D/, "Name shouldn't have numbers")
      .matches(/\D\s\D/, 'Name should have indent')
      .required('Name is required'),
    date: yup
      .string()
      .matches(/\d{2}\/\d{2}/, "Date isn't completed")
      .required('Date is required'),
    cvv: yup
      .string()
      .length(3, 'CVV must have 3 characters')
      .required('CVV is required'),
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values: FormikValues) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Grid container className={classes.wrapper} justify="center" alignItems="center">
      <Grid container className={classes.background} justify="center" alignItems="center">
        <Grid container className={classes.container} justify="center" alignItems="center">
          <View formik={formik} fieldInFocus={fieldInFocus} />
          <Form formik={formik} setFieldInFocus={setFieldInFocus} />
        </Grid>
      </Grid>
    </Grid>
  )
}
